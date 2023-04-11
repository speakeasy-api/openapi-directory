import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteDBInstanceAutomatedBackupActionEnum {
    DeleteDBInstanceAutomatedBackup = "DeleteDBInstanceAutomatedBackup"
}
export declare enum GETDeleteDBInstanceAutomatedBackupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETDeleteDBInstanceAutomatedBackupRequest extends SpeakeasyBase {
    action: GETDeleteDBInstanceAutomatedBackupActionEnum;
    /**
     * <p>The Amazon Resource Name (ARN) of the automated backups to delete, for example, <code>arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE</code>.</p> <p>This setting doesn't apply to RDS Custom.</p>
     */
    dbInstanceAutomatedBackupsArn?: string;
    /**
     * The identifier for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region.
     */
    dbiResourceId?: string;
    version: GETDeleteDBInstanceAutomatedBackupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteDBInstanceAutomatedBackupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
