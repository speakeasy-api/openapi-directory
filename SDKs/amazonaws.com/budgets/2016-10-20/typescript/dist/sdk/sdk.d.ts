import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://budgets.amazonaws.com", "http://budgets.{region}.amazonaws.com.cn", "https://budgets.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <p>Use the Amazon Web Services Budgets API to plan your service usage, service costs, and instance reservations. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for the Amazon Web Services Budgets feature. </p> <p>Budgets provide you with a way to see the following information:</p> <ul> <li> <p>How close your plan is to your budgeted amount or to the free tier limits</p> </li> <li> <p>Your usage-to-date, including how much you've used of your Reserved Instances (RIs)</p> </li> <li> <p>Your current estimated charges from Amazon Web Services, and how much your predicted usage will accrue in charges by the end of the month</p> </li> <li> <p>How much of your budget has been used</p> </li> </ul> <p>Amazon Web Services updates your budget status several times a day. Budgets track your unblended costs, subscriptions, refunds, and RIs. You can create the following types of budgets:</p> <ul> <li> <p> <b>Cost budgets</b> - Plan how much you want to spend on a service.</p> </li> <li> <p> <b>Usage budgets</b> - Plan how much you want to use one or more services.</p> </li> <li> <p> <b>RI utilization budgets</b> - Define a utilization threshold, and receive alerts when your RI usage falls below that threshold. This lets you see if your RIs are unused or under-utilized.</p> </li> <li> <p> <b>RI coverage budgets</b> - Define a coverage threshold, and receive alerts when the number of your instance hours that are covered by RIs fall below that threshold. This lets you see how much of your instance usage is covered by a reservation.</p> </li> </ul> <p>Service Endpoint</p> <p>The Amazon Web Services Budgets API provides the following endpoint:</p> <ul> <li> <p>https://budgets.amazonaws.com</p> </li> </ul> <p>For information about costs that are associated with the Amazon Web Services Budgets API, see <a href="https://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost Management Pricing</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/budgets/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
     */
    createBudget(req: operations.CreateBudgetRequest, config?: AxiosRequestConfig): Promise<operations.CreateBudgetResponse>;
    /**
     *  Creates a budget action.
     */
    createBudgetAction(req: operations.CreateBudgetActionRequest, config?: AxiosRequestConfig): Promise<operations.CreateBudgetActionResponse>;
    /**
     * Creates a notification. You must create the budget before you create the associated notification.
     */
    createNotification(req: operations.CreateNotificationRequest, config?: AxiosRequestConfig): Promise<operations.CreateNotificationResponse>;
    /**
     * Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
     */
    createSubscriber(req: operations.CreateSubscriberRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubscriberResponse>;
    /**
     * <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
     */
    deleteBudget(req: operations.DeleteBudgetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBudgetResponse>;
    /**
     *  Deletes a budget action.
     */
    deleteBudgetAction(req: operations.DeleteBudgetActionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBudgetActionResponse>;
    /**
     * <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
     */
    deleteNotification(req: operations.DeleteNotificationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNotificationResponse>;
    /**
     * <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
     */
    deleteSubscriber(req: operations.DeleteSubscriberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubscriberResponse>;
    /**
     * <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
     */
    describeBudget(req: operations.DescribeBudgetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBudgetResponse>;
    /**
     *  Describes a budget action detail.
     */
    describeBudgetAction(req: operations.DescribeBudgetActionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBudgetActionResponse>;
    /**
     *  Describes a budget action history detail.
     */
    describeBudgetActionHistories(req: operations.DescribeBudgetActionHistoriesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBudgetActionHistoriesResponse>;
    /**
     *  Describes all of the budget actions for an account.
     */
    describeBudgetActionsForAccount(req: operations.DescribeBudgetActionsForAccountRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBudgetActionsForAccountResponse>;
    /**
     *  Describes all of the budget actions for a budget.
     */
    describeBudgetActionsForBudget(req: operations.DescribeBudgetActionsForBudgetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBudgetActionsForBudgetResponse>;
    /**
     *  Lists the budget names and notifications that are associated with an account.
     */
    describeBudgetNotificationsForAccount(req: operations.DescribeBudgetNotificationsForAccountRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBudgetNotificationsForAccountResponse>;
    /**
     * Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
     */
    describeBudgetPerformanceHistory(req: operations.DescribeBudgetPerformanceHistoryRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBudgetPerformanceHistoryResponse>;
    /**
     * <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
     */
    describeBudgets(req: operations.DescribeBudgetsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBudgetsResponse>;
    /**
     * Lists the notifications that are associated with a budget.
     */
    describeNotificationsForBudget(req: operations.DescribeNotificationsForBudgetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeNotificationsForBudgetResponse>;
    /**
     * Lists the subscribers that are associated with a notification.
     */
    describeSubscribersForNotification(req: operations.DescribeSubscribersForNotificationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSubscribersForNotificationResponse>;
    /**
     *  Executes a budget action.
     */
    executeBudgetAction(req: operations.ExecuteBudgetActionRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteBudgetActionResponse>;
    /**
     * <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
     */
    updateBudget(req: operations.UpdateBudgetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBudgetResponse>;
    /**
     *  Updates a budget action.
     */
    updateBudgetAction(req: operations.UpdateBudgetActionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBudgetActionResponse>;
    /**
     * Updates a notification.
     */
    updateNotification(req: operations.UpdateNotificationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNotificationResponse>;
    /**
     * Updates a subscriber.
     */
    updateSubscriber(req: operations.UpdateSubscriberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriberResponse>;
}
