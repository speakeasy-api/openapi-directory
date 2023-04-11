import { SpeakeasyBase } from "../../../internal/utils";
import { AuthTokenUpdateStrategyTypeEnum } from "./authtokenupdatestrategytypeenum";
import { IpDiscoveryEnum } from "./ipdiscoveryenum";
import { LogDeliveryConfigurationRequestList } from "./logdeliveryconfigurationrequestlist";
import { TransitEncryptionModeEnum } from "./transitencryptionmodeenum";
/**
 * Represents the input of a <code>ModifyReplicationGroups</code> operation.
 */
export declare class ModifyReplicationGroupMessage extends SpeakeasyBase {
    applyImmediately?: boolean;
    authToken?: string;
    authTokenUpdateStrategy?: AuthTokenUpdateStrategyTypeEnum;
    autoMinorVersionUpgrade?: boolean;
    automaticFailoverEnabled?: boolean;
    cacheNodeType?: string;
    cacheParameterGroupName?: string;
    cacheSecurityGroupNames?: string[];
    engineVersion?: string;
    ipDiscovery?: IpDiscoveryEnum;
    logDeliveryConfigurations?: LogDeliveryConfigurationRequestList[];
    multiAZEnabled?: boolean;
    nodeGroupId?: string;
    notificationTopicArn?: string;
    notificationTopicStatus?: string;
    preferredMaintenanceWindow?: string;
    primaryClusterId?: string;
    removeUserGroups?: boolean;
    replicationGroupDescription?: string;
    replicationGroupId: string;
    securityGroupIds?: string[];
    snapshotRetentionLimit?: number;
    snapshotWindow?: string;
    snapshottingClusterId?: string;
    transitEncryptionEnabled?: boolean;
    transitEncryptionMode?: TransitEncryptionModeEnum;
    userGroupIdsToAdd?: string[];
    userGroupIdsToRemove?: string[];
}
