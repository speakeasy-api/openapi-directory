import { SpeakeasyBase } from "../../../internal/utils";
import { CapabilityEnum } from "./capabilityenum";
import { Output } from "./output";
import { Parameter } from "./parameter";
import { RollbackConfiguration } from "./rollbackconfiguration";
import { StackDriftInformation } from "./stackdriftinformation";
import { StackStatusEnum } from "./stackstatusenum";
import { Tag } from "./tag";
/**
 * The Stack data type.
 */
export declare class Stack extends SpeakeasyBase {
    capabilities?: CapabilityEnum[];
    changeSetId?: string;
    creationTime: Date;
    deletionTime?: Date;
    description?: string;
    disableRollback?: boolean;
    driftInformation?: StackDriftInformation;
    enableTerminationProtection?: boolean;
    lastUpdatedTime?: Date;
    notificationARNs?: string[];
    outputs?: Output[];
    parameters?: Parameter[];
    parentId?: string;
    roleARN?: string;
    rollbackConfiguration?: RollbackConfiguration;
    rootId?: string;
    stackId?: string;
    stackName: string;
    stackStatus: StackStatusEnum;
    stackStatusReason?: string;
    tags?: Tag[];
    timeoutInMinutes?: number;
}
