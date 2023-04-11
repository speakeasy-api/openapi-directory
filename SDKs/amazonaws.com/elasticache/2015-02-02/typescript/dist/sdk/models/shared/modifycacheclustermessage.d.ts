import { SpeakeasyBase } from "../../../internal/utils";
import { AuthTokenUpdateStrategyTypeEnum } from "./authtokenupdatestrategytypeenum";
import { AZModeEnum } from "./azmodeenum";
import { IpDiscoveryEnum } from "./ipdiscoveryenum";
import { LogDeliveryConfigurationRequestList } from "./logdeliveryconfigurationrequestlist";
/**
 * Represents the input of a <code>ModifyCacheCluster</code> operation.
 */
export declare class ModifyCacheClusterMessage extends SpeakeasyBase {
    azMode?: AZModeEnum;
    applyImmediately?: boolean;
    authToken?: string;
    authTokenUpdateStrategy?: AuthTokenUpdateStrategyTypeEnum;
    autoMinorVersionUpgrade?: boolean;
    cacheClusterId: string;
    cacheNodeIdsToRemove?: string[];
    cacheNodeType?: string;
    cacheParameterGroupName?: string;
    cacheSecurityGroupNames?: string[];
    engineVersion?: string;
    ipDiscovery?: IpDiscoveryEnum;
    logDeliveryConfigurations?: LogDeliveryConfigurationRequestList[];
    newAvailabilityZones?: string[];
    notificationTopicArn?: string;
    notificationTopicStatus?: string;
    numCacheNodes?: number;
    preferredMaintenanceWindow?: string;
    securityGroupIds?: string[];
    snapshotRetentionLimit?: number;
    snapshotWindow?: string;
}
