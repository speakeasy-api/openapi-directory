import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateFileCacheXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301CreateFileCache = "AWSSimbaAPIService_v20180301.CreateFileCache"
}
export declare class CreateFileCacheRequest extends SpeakeasyBase {
    createFileCacheRequest: shared.CreateFileCacheRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFileCacheXAmzTargetEnum;
}
export declare class CreateFileCacheResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    createFileCacheResponse?: shared.CreateFileCacheResponse;
    /**
     * IncompatibleParameterError
     */
    incompatibleParameterError?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidNetworkSettings
     */
    invalidNetworkSettings?: any;
    /**
     * InvalidPerUnitStorageThroughput
     */
    invalidPerUnitStorageThroughput?: any;
    /**
     * MissingFileCacheConfiguration
     */
    missingFileCacheConfiguration?: any;
    /**
     * ServiceLimitExceeded
     */
    serviceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
