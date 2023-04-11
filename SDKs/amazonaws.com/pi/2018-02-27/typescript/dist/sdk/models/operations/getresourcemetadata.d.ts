import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResourceMetadataXAmzTargetEnum {
    PerformanceInsightsv20180227GetResourceMetadata = "PerformanceInsightsv20180227.GetResourceMetadata"
}
export declare class GetResourceMetadataRequest extends SpeakeasyBase {
    getResourceMetadataRequest: shared.GetResourceMetadataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourceMetadataXAmzTargetEnum;
}
export declare class GetResourceMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResourceMetadataResponse?: shared.GetResourceMetadataResponse;
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
