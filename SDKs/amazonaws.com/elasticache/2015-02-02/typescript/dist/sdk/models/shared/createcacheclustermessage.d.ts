import { SpeakeasyBase } from "../../../internal/utils";
import { AZModeEnum } from "./azmodeenum";
import { IpDiscoveryEnum } from "./ipdiscoveryenum";
import { LogDeliveryConfigurationRequestList } from "./logdeliveryconfigurationrequestlist";
import { NetworkTypeEnum } from "./networktypeenum";
import { OutpostModeEnum } from "./outpostmodeenum";
import { TagList } from "./taglist";
/**
 * Represents the input of a CreateCacheCluster operation.
 */
export declare class CreateCacheClusterMessage extends SpeakeasyBase {
    azMode?: AZModeEnum;
    authToken?: string;
    autoMinorVersionUpgrade?: boolean;
    cacheClusterId: string;
    cacheNodeType?: string;
    cacheParameterGroupName?: string;
    cacheSecurityGroupNames?: string[];
    cacheSubnetGroupName?: string;
    engine?: string;
    engineVersion?: string;
    ipDiscovery?: IpDiscoveryEnum;
    logDeliveryConfigurations?: LogDeliveryConfigurationRequestList[];
    networkType?: NetworkTypeEnum;
    notificationTopicArn?: string;
    numCacheNodes?: number;
    outpostMode?: OutpostModeEnum;
    port?: number;
    preferredAvailabilityZone?: string;
    preferredAvailabilityZones?: string[];
    preferredMaintenanceWindow?: string;
    preferredOutpostArn?: string;
    preferredOutpostArns?: string[];
    replicationGroupId?: string;
    securityGroupIds?: string[];
    snapshotArns?: string[];
    snapshotName?: string;
    snapshotRetentionLimit?: number;
    snapshotWindow?: string;
    tags?: TagList[];
    transitEncryptionEnabled?: boolean;
}
