import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
import { StackDriftStatusEnum } from "./stackdriftstatusenum";
import { StackInstanceComprehensiveStatus } from "./stackinstancecomprehensivestatus";
import { StackInstanceStatusEnum } from "./stackinstancestatusenum";
/**
 * An CloudFormation stack, in a specific account and Region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, in addition to the ID of the actual stack and the stack status.
 */
export declare class StackInstance extends SpeakeasyBase {
    account?: string;
    driftStatus?: StackDriftStatusEnum;
    lastDriftCheckTimestamp?: Date;
    lastOperationId?: string;
    organizationalUnitId?: string;
    parameterOverrides?: Parameter[];
    region?: string;
    stackId?: string;
    stackInstanceStatus?: StackInstanceComprehensiveStatus;
    stackSetId?: string;
    status?: StackInstanceStatusEnum;
    statusReason?: string;
}
