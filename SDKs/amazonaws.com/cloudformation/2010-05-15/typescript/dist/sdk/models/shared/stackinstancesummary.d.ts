import { SpeakeasyBase } from "../../../internal/utils";
import { StackDriftStatusEnum } from "./stackdriftstatusenum";
import { StackInstanceComprehensiveStatus } from "./stackinstancecomprehensivestatus";
import { StackInstanceStatusEnum } from "./stackinstancestatusenum";
/**
 * The structure that contains summary information about a stack instance.
 */
export declare class StackInstanceSummary extends SpeakeasyBase {
    account?: string;
    driftStatus?: StackDriftStatusEnum;
    lastDriftCheckTimestamp?: Date;
    lastOperationId?: string;
    organizationalUnitId?: string;
    region?: string;
    stackId?: string;
    stackInstanceStatus?: StackInstanceComprehensiveStatus;
    stackSetId?: string;
    status?: StackInstanceStatusEnum;
    statusReason?: string;
}
