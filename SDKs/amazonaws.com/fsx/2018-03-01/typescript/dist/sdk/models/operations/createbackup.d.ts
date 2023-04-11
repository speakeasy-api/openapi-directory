import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateBackupXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301CreateBackup = "AWSSimbaAPIService_v20180301.CreateBackup"
}
export declare class CreateBackupRequest extends SpeakeasyBase {
    createBackupRequest: shared.CreateBackupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBackupXAmzTargetEnum;
}
export declare class CreateBackupResponse extends SpeakeasyBase {
    /**
     * BackupInProgress
     */
    backupInProgress?: any;
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    createBackupResponse?: shared.CreateBackupResponse;
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
     * VolumeNotFound
     */
    volumeNotFound?: any;
}
