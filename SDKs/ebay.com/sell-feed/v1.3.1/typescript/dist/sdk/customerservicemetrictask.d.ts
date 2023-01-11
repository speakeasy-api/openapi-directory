import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomerServiceMetricTask {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createCustomerServiceMetricTask - Use this method to create a customer service metrics download task with filter criteria for the customer service metrics report. When using this method, specify the feedType and filterCriteria including both evaluationMarketplaceId and customerServiceMetricType for the report. The method returns the location response header containing the call URI to use with getCustomerServiceMetricTask to retrieve status and details on the task. Only CURRENT Customer Service Metrics reports can be generated with the Sell Feed API. PROJECTED reports are not supported at this time. See the getCustomerServiceMetric method document in the Analytics API for more information about these two types of reports. Note: Before calling this API, retrieve the summary of the seller's performance and rating for the customer service metric by calling getCustomerServiceMetric (part of the Analytics API). You can then populate the create task request fields with the values from the response. This technique eliminates failed tasks that request a report for a customerServiceMetricType and evaluationMarketplaceId that are without evaluation.
    **/
    createCustomerServiceMetricTask(req: operations.CreateCustomerServiceMetricTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomerServiceMetricTaskResponse>;
    /**
     * getCustomerServiceMetricTask - Use this method to retrieve customer service metric task details for the specified task. The input is task_id.
    **/
    getCustomerServiceMetricTask(req: operations.GetCustomerServiceMetricTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomerServiceMetricTaskResponse>;
    /**
     * getCustomerServiceMetricTasks - Use this method to return an array of customer service metric tasks. You can limit the tasks returned by specifying a date range. Note: You can pass in either the look_back_days or date_range, but not both.
    **/
    getCustomerServiceMetricTasks(req: operations.GetCustomerServiceMetricTasksRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomerServiceMetricTasksResponse>;
}
