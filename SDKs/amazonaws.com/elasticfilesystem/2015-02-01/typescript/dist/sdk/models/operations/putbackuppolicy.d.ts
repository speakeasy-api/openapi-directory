import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.
 */
export declare class PutBackupPolicyRequestBodyBackupPolicy extends SpeakeasyBase {
    status?: shared.StatusEnum;
}
export declare class PutBackupPolicyRequestBody extends SpeakeasyBase {
    /**
     * The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.
     */
    backupPolicy: PutBackupPolicyRequestBodyBackupPolicy;
}
export declare class PutBackupPolicyRequest extends SpeakeasyBase {
    /**
     * Specifies which EFS file system to update the backup policy for.
     */
    fileSystemId: string;
    requestBody: PutBackupPolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutBackupPolicyResponse extends SpeakeasyBase {
    /**
     * Success
     */
    backupPolicyDescription?: shared.BackupPolicyDescription;
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
     * IncorrectFileSystemLifeCycleState
     */
    incorrectFileSystemLifeCycleState?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
