import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomerServiceMetricTaskSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetCustomerServiceMetricTaskRequest extends SpeakeasyBase {
    /**
     * Use this path parameter to specify the task ID value for the customer service metric task to retrieve.
     */
    taskId: string;
}
export declare class GetCustomerServiceMetricTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceMetricsTask?: shared.ServiceMetricsTask;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
