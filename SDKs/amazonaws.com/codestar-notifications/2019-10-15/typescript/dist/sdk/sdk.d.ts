import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://codestar-notifications.{region}.amazonaws.com", "https://codestar-notifications.{region}.amazonaws.com", "http://codestar-notifications.{region}.amazonaws.com.cn", "https://codestar-notifications.{region}.amazonaws.com.cn"];
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
 * <p>This AWS CodeStar Notifications API Reference provides descriptions and usage examples of the operations and data types for the AWS CodeStar Notifications API. You can use the AWS CodeStar Notifications API to work with the following objects:</p> <p>Notification rules, by calling the following: </p> <ul> <li> <p> <a>CreateNotificationRule</a>, which creates a notification rule for a resource in your account. </p> </li> <li> <p> <a>DeleteNotificationRule</a>, which deletes a notification rule. </p> </li> <li> <p> <a>DescribeNotificationRule</a>, which provides information about a notification rule. </p> </li> <li> <p> <a>ListNotificationRules</a>, which lists the notification rules associated with your account. </p> </li> <li> <p> <a>UpdateNotificationRule</a>, which changes the name, events, or targets associated with a notification rule. </p> </li> <li> <p> <a>Subscribe</a>, which subscribes a target to a notification rule. </p> </li> <li> <p> <a>Unsubscribe</a>, which removes a target from a notification rule. </p> </li> </ul> <p>Targets, by calling the following: </p> <ul> <li> <p> <a>DeleteTarget</a>, which removes a notification rule target from a notification rule. </p> </li> <li> <p> <a>ListTargets</a>, which lists the targets associated with a notification rule. </p> </li> </ul> <p>Events, by calling the following: </p> <ul> <li> <p> <a>ListEventTypes</a>, which lists the event types you can include in a notification rule. </p> </li> </ul> <p>Tags, by calling the following: </p> <ul> <li> <p> <a>ListTagsForResource</a>, which lists the tags already associated with a notification rule in your account. </p> </li> <li> <p> <a>TagResource</a>, which associates a tag you provide with a notification rule in your account. </p> </li> <li> <p> <a>UntagResource</a>, which removes a tag from a notification rule in your account. </p> </li> </ul> <p> For information about how to use AWS CodeStar Notifications, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/what-is-dtconsole.html">Amazon Web Services Developer Tools Console User Guide</a>. </p>
 *
 * @see {@link https://docs.aws.amazon.com/codestar-notifications/} - Amazon Web Services documentation
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
     * Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive them.
     */
    createNotificationRule(req: operations.CreateNotificationRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateNotificationRuleResponse>;
    /**
     * Deletes a notification rule for a resource.
     */
    deleteNotificationRule(req: operations.DeleteNotificationRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNotificationRuleResponse>;
    /**
     * Deletes a specified target for notifications.
     */
    deleteTarget(req: operations.DeleteTargetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTargetResponse>;
    /**
     * Returns information about a specified notification rule.
     */
    describeNotificationRule(req: operations.DescribeNotificationRuleRequest, config?: AxiosRequestConfig): Promise<operations.DescribeNotificationRuleResponse>;
    /**
     * Returns information about the event types available for configuring notifications.
     */
    listEventTypes(req: operations.ListEventTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListEventTypesResponse>;
    /**
     * Returns a list of the notification rules for an Amazon Web Services account.
     */
    listNotificationRules(req: operations.ListNotificationRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListNotificationRulesResponse>;
    /**
     * Returns a list of the tags associated with a notification rule.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Returns a list of the notification rule targets for an Amazon Web Services account.
     */
    listTargets(req: operations.ListTargetsRequest, config?: AxiosRequestConfig): Promise<operations.ListTargetsResponse>;
    /**
     * Creates an association between a notification rule and an Chatbot topic or Chatbot client so that the associated target can receive notifications when the events described in the rule are triggered.
     */
    subscribe(req: operations.SubscribeRequest, config?: AxiosRequestConfig): Promise<operations.SubscribeResponse>;
    /**
     * Associates a set of provided tags with a notification rule.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes an association between a notification rule and an Chatbot topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.
     */
    unsubscribe(req: operations.UnsubscribeRequest, config?: AxiosRequestConfig): Promise<operations.UnsubscribeResponse>;
    /**
     * Removes the association between one or more provided tags and a notification rule.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications.</p> <note> <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p> </note>
     */
    updateNotificationRule(req: operations.UpdateNotificationRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNotificationRuleResponse>;
}
