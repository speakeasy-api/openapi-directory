import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteBackupXAmzTargetEnum {
    DynamoDB20120810DeleteBackup = "DynamoDB_20120810.DeleteBackup"
}
export declare class DeleteBackupRequest extends SpeakeasyBase {
    deleteBackupInput: shared.DeleteBackupInput;
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
     * BackupInUseException
     */
    backupInUseException?: any;
    /**
     * BackupNotFoundException
     */
    backupNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteBackupOutput?: shared.DeleteBackupOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
