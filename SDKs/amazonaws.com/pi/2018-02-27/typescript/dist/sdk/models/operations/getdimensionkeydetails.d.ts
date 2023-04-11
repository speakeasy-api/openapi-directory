import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDimensionKeyDetailsXAmzTargetEnum {
    PerformanceInsightsv20180227GetDimensionKeyDetails = "PerformanceInsightsv20180227.GetDimensionKeyDetails"
}
export declare class GetDimensionKeyDetailsRequest extends SpeakeasyBase {
    getDimensionKeyDetailsRequest: shared.GetDimensionKeyDetailsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDimensionKeyDetailsXAmzTargetEnum;
}
export declare class GetDimensionKeyDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDimensionKeyDetailsResponse?: shared.GetDimensionKeyDetailsResponse;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
