import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateVolumeFromBackupXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301CreateVolumeFromBackup = "AWSSimbaAPIService_v20180301.CreateVolumeFromBackup"
}
export declare class CreateVolumeFromBackupRequest extends SpeakeasyBase {
    createVolumeFromBackupRequest: shared.CreateVolumeFromBackupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateVolumeFromBackupXAmzTargetEnum;
}
export declare class CreateVolumeFromBackupResponse extends SpeakeasyBase {
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
    createVolumeFromBackupResponse?: shared.CreateVolumeFromBackupResponse;
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
     * MissingVolumeConfiguration
     */
    missingVolumeConfiguration?: any;
    /**
     * ServiceLimitExceeded
     */
    serviceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * StorageVirtualMachineNotFound
     */
    storageVirtualMachineNotFound?: any;
}
