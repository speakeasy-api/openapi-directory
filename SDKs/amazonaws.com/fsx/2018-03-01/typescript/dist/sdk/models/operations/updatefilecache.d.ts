import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFileCacheXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301UpdateFileCache = "AWSSimbaAPIService_v20180301.UpdateFileCache"
}
export declare class UpdateFileCacheRequest extends SpeakeasyBase {
    updateFileCacheRequest: shared.UpdateFileCacheRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFileCacheXAmzTargetEnum;
}
export declare class UpdateFileCacheResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * FileCacheNotFound
     */
    fileCacheNotFound?: any;
    /**
     * IncompatibleParameterError
     */
    incompatibleParameterError?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * MissingFileCacheConfiguration
     */
    missingFileCacheConfiguration?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLimitExceeded
     */
    serviceLimitExceeded?: any;
    /**
     * UnsupportedOperation
     */
    unsupportedOperation?: any;
    /**
     * Success
     */
    updateFileCacheResponse?: shared.UpdateFileCacheResponse;
}
