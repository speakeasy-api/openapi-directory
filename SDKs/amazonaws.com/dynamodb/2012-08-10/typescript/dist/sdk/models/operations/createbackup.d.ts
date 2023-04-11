import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateBackupXAmzTargetEnum {
    DynamoDB20120810CreateBackup = "DynamoDB_20120810.CreateBackup"
}
export declare class CreateBackupRequest extends SpeakeasyBase {
    createBackupInput: shared.CreateBackupInput;
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
     * BackupInUseException
     */
    backupInUseException?: any;
    contentType: string;
    /**
     * ContinuousBackupsUnavailableException
     */
    continuousBackupsUnavailableException?: any;
    /**
     * Success
     */
    createBackupOutput?: shared.CreateBackupOutput;
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
    /**
     * TableInUseException
     */
    tableInUseException?: any;
    /**
     * TableNotFoundException
     */
    tableNotFoundException?: any;
}
