import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCustomMetricRequestBody extends SpeakeasyBase {
    /**
     *  Field represents a friendly name in the console for the custom metric, it doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated.
     */
    displayName: string;
}
export declare class UpdateCustomMetricRequest extends SpeakeasyBase {
    requestBody: UpdateCustomMetricRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The name of the custom metric. Cannot be updated.
     */
    metricName: string;
}
export declare class UpdateCustomMetricResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateCustomMetricResponse?: shared.UpdateCustomMetricResponse;
}
