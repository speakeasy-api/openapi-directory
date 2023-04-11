import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateFileSystemXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301CreateFileSystem = "AWSSimbaAPIService_v20180301.CreateFileSystem"
}
export declare class CreateFileSystemRequest extends SpeakeasyBase {
    createFileSystemRequest: shared.CreateFileSystemRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFileSystemXAmzTargetEnum;
}
export declare class CreateFileSystemResponse extends SpeakeasyBase {
    /**
     * ActiveDirectoryError
     */
    activeDirectoryError?: any;
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    createFileSystemResponse?: shared.CreateFileSystemResponse;
    /**
     * IncompatibleParameterError
     */
    incompatibleParameterError?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidExportPath
     */
    invalidExportPath?: any;
    /**
     * InvalidImportPath
     */
    invalidImportPath?: any;
    /**
     * InvalidNetworkSettings
     */
    invalidNetworkSettings?: any;
    /**
     * InvalidPerUnitStorageThroughput
     */
    invalidPerUnitStorageThroughput?: any;
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
}
