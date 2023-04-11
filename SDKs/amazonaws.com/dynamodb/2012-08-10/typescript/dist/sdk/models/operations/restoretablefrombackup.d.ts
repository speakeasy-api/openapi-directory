import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RestoreTableFromBackupXAmzTargetEnum {
    DynamoDB20120810RestoreTableFromBackup = "DynamoDB_20120810.RestoreTableFromBackup"
}
export declare class RestoreTableFromBackupRequest extends SpeakeasyBase {
    restoreTableFromBackupInput: shared.RestoreTableFromBackupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreTableFromBackupXAmzTargetEnum;
}
export declare class RestoreTableFromBackupResponse extends SpeakeasyBase {
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
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    restoreTableFromBackupOutput?: shared.RestoreTableFromBackupOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TableAlreadyExistsException
     */
    tableAlreadyExistsException?: any;
    /**
     * TableInUseException
     */
    tableInUseException?: any;
}
