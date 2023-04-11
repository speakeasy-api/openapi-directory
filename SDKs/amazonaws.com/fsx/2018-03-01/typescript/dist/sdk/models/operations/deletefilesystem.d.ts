import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteFileSystemXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DeleteFileSystem = "AWSSimbaAPIService_v20180301.DeleteFileSystem"
}
export declare class DeleteFileSystemRequest extends SpeakeasyBase {
    deleteFileSystemRequest: shared.DeleteFileSystemRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFileSystemXAmzTargetEnum;
}
export declare class DeleteFileSystemResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    deleteFileSystemResponse?: shared.DeleteFileSystemResponse;
    /**
     * FileSystemNotFound
     */
    fileSystemNotFound?: any;
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
