import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateFileSystemFromBackupXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301CreateFileSystemFromBackup = "AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup"
}
export declare class CreateFileSystemFromBackupRequest extends SpeakeasyBase {
    createFileSystemFromBackupRequest: shared.CreateFileSystemFromBackupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFileSystemFromBackupXAmzTargetEnum;
}
export declare class CreateFileSystemFromBackupResponse extends SpeakeasyBase {
    /**
     * ActiveDirectoryError
     */
    activeDirectoryError?: any;
    /**
     * BackupNotFound
     */
    backupNotFound?: any;
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    createFileSystemFromBackupResponse?: shared.CreateFileSystemFromBackupResponse;
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
     * MissingFileSystemConfiguration
     */
    missingFileSystemConfiguration?: any;
    /**
     * ServiceLimitExceeded
     */
    serviceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
