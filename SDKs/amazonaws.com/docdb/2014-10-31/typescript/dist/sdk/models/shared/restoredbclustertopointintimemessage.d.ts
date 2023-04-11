import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input to <a>RestoreDBClusterToPointInTime</a>.
 */
export declare class RestoreDBClusterToPointInTimeMessage extends SpeakeasyBase {
    dbClusterIdentifier: string;
    dbSubnetGroupName?: string;
    deletionProtection?: boolean;
    enableCloudwatchLogsExports?: string[];
    kmsKeyId?: string;
    port?: number;
    restoreToTime?: Date;
    restoreType?: string;
    sourceDBClusterIdentifier: string;
    tags?: TagList[];
    useLatestRestorableTime?: boolean;
    vpcSecurityGroupIds?: string[];
}
