import { SpeakeasyBase } from "../../../internal/utils";
export declare class StartDBInstanceAutomatedBackupsReplicationMessage extends SpeakeasyBase {
    backupRetentionPeriod?: number;
    kmsKeyId?: string;
    preSignedUrl?: string;
    sourceDBInstanceArn: string;
}
