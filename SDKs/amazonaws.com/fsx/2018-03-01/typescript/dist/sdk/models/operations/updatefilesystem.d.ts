import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFileSystemXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301UpdateFileSystem = "AWSSimbaAPIService_v20180301.UpdateFileSystem"
}
export declare class UpdateFileSystemRequest extends SpeakeasyBase {
    updateFileSystemRequest: shared.UpdateFileSystemRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFileSystemXAmzTargetEnum;
}
export declare class UpdateFileSystemResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
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
     * InvalidNetworkSettings
     */
    invalidNetworkSettings?: any;
    /**
     * MissingFileSystemConfiguration
     */
    missingFileSystemConfiguration?: any;
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
    updateFileSystemResponse?: shared.UpdateFileSystemResponse;
}
