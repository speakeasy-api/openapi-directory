import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMinuteUsageRequestBody extends SpeakeasyBase {
    /**
     * The month being requested, with a value of 1-12.
     */
    month: number;
    /**
     * The year being requested, in the format of YYYY.
     */
    year: number;
}
export declare class GetMinuteUsageRequest extends SpeakeasyBase {
    requestBody: GetMinuteUsageRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMinuteUsageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyException
     */
    dependencyException?: any;
    /**
     * Success
     */
    getMinuteUsageResponse?: shared.GetMinuteUsageResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
