import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteFileCacheXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DeleteFileCache = "AWSSimbaAPIService_v20180301.DeleteFileCache"
}
export declare class DeleteFileCacheRequest extends SpeakeasyBase {
    deleteFileCacheRequest: shared.DeleteFileCacheRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFileCacheXAmzTargetEnum;
}
export declare class DeleteFileCacheResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    deleteFileCacheResponse?: shared.DeleteFileCacheResponse;
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
     * ServiceLimitExceeded
     */
    serviceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
