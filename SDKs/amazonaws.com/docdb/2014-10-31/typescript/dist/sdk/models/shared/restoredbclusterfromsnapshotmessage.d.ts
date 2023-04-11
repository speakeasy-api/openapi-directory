import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input to <a>RestoreDBClusterFromSnapshot</a>.
 */
export declare class RestoreDBClusterFromSnapshotMessage extends SpeakeasyBase {
    availabilityZones?: string[];
    dbClusterIdentifier: string;
    dbSubnetGroupName?: string;
    deletionProtection?: boolean;
    enableCloudwatchLogsExports?: string[];
    engine: string;
    engineVersion?: string;
    kmsKeyId?: string;
    port?: number;
    snapshotIdentifier: string;
    tags?: TagList[];
    vpcSecurityGroupIds?: string[];
}
