import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteBackupXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DeleteBackup = "AWSSimbaAPIService_v20180301.DeleteBackup"
}
export declare class DeleteBackupRequest extends SpeakeasyBase {
    deleteBackupRequest: shared.DeleteBackupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBackupXAmzTargetEnum;
}
export declare class DeleteBackupResponse extends SpeakeasyBase {
    /**
     * BackupBeingCopied
     */
    backupBeingCopied?: any;
    /**
     * BackupInProgress
     */
    backupInProgress?: any;
    /**
     * BackupNotFound
     */
    backupNotFound?: any;
    /**
     * BackupRestoring
     */
    backupRestoring?: any;
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    deleteBackupResponse?: shared.DeleteBackupResponse;
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
}
