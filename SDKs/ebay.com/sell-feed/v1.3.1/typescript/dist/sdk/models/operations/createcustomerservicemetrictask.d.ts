import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCustomerServiceMetricTaskSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateCustomerServiceMetricTaskRequest extends SpeakeasyBase {
    /**
     * Request payload containing version, feedType, and optional filterCriteria.
     */
    createServiceMetricsTaskRequest: shared.CreateServiceMetricsTaskRequest;
    /**
     * Use this header to specify the natural language in which the authenticated user desires the response.
     */
    acceptLanguage: string;
}
export declare class CreateCustomerServiceMetricTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
