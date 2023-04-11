import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomerServiceMetricTask {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * <p>Use this method to create a customer service metrics download task with filter criteria for the customer service metrics report. When using this method, specify the <strong>feedType</strong> and <strong>filterCriteria</strong> including both <strong>evaluationMarketplaceId</strong> and <strong>customerServiceMetricType</strong> for the report. The method returns the location response header containing the call URI to use with <strong>getCustomerServiceMetricTask</strong> to retrieve status and details on the task.</p><p>Only CURRENT Customer Service Metrics reports can be generated with the Sell Feed API. PROJECTED reports are not supported at this time. See the <a href="/api-docs/sell/analytics/resources/customer_service_metric/methods/getCustomerServiceMetric">getCustomerServiceMetric</a> method document in the Analytics API for more information about these two types of reports.</p><p><span class="tablenote"><strong>Note:</strong> Before calling this API, retrieve the summary of the seller's performance and rating for the customer service metric by calling <strong>getCustomerServiceMetric</strong> (part of the <a href="/api-docs/sell/analytics/resources/methods">Analytics API</a>). You can then populate the create task request fields with the values from the response. This technique eliminates failed tasks that request a report for a <strong>customerServiceMetricType</strong> and <strong>evaluationMarketplaceId</strong> that are without evaluation.</span></p>
     */
    createCustomerServiceMetricTask(req: operations.CreateCustomerServiceMetricTaskRequest, security: operations.CreateCustomerServiceMetricTaskSecurity, config?: AxiosRequestConfig): Promise<operations.CreateCustomerServiceMetricTaskResponse>;
    /**
     * <p>Use this method to retrieve customer service metric task details for the specified task. The input is <strong>task_id</strong>.</p>
     */
    getCustomerServiceMetricTask(req: operations.GetCustomerServiceMetricTaskRequest, security: operations.GetCustomerServiceMetricTaskSecurity, config?: AxiosRequestConfig): Promise<operations.GetCustomerServiceMetricTaskResponse>;
    /**
     * Use this method to return an array of customer service metric tasks. You can limit the tasks returned by specifying a date range. </p> <p> <span class="tablenote"><strong>Note:</strong> You can pass in either the <code>look_back_days </code>or<code> date_range</code>, but not both.</span></p>
     */
    getCustomerServiceMetricTasks(req: operations.GetCustomerServiceMetricTasksRequest, security: operations.GetCustomerServiceMetricTasksSecurity, config?: AxiosRequestConfig): Promise<operations.GetCustomerServiceMetricTasksResponse>;
}
