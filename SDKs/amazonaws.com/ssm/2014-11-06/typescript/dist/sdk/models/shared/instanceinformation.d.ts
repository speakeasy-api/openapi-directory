import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceAggregatedAssociationOverview } from "./instanceaggregatedassociationoverview";
import { PingStatusEnum } from "./pingstatusenum";
import { PlatformTypeEnum } from "./platformtypeenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * Describes a filter for a specific list of managed nodes.
 */
export declare class InstanceInformation extends SpeakeasyBase {
    activationId?: string;
    agentVersion?: string;
    associationOverview?: InstanceAggregatedAssociationOverview;
    associationStatus?: string;
    computerName?: string;
    ipAddress?: string;
    iamRole?: string;
    instanceId?: string;
    isLatestVersion?: boolean;
    lastAssociationExecutionDate?: Date;
    lastPingDateTime?: Date;
    lastSuccessfulAssociationExecutionDate?: Date;
    name?: string;
    pingStatus?: PingStatusEnum;
    platformName?: string;
    platformType?: PlatformTypeEnum;
    platformVersion?: string;
    registrationDate?: Date;
    resourceType?: ResourceTypeEnum;
    sourceId?: string;
    sourceType?: SourceTypeEnum;
}
