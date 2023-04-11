import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeBackupXAmzTargetEnum {
    DynamoDB20120810DescribeBackup = "DynamoDB_20120810.DescribeBackup"
}
export declare class DescribeBackupRequest extends SpeakeasyBase {
    describeBackupInput: shared.DescribeBackupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBackupXAmzTargetEnum;
}
export declare class DescribeBackupResponse extends SpeakeasyBase {
    /**
     * BackupNotFoundException
     */
    backupNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    describeBackupOutput?: shared.DescribeBackupOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
