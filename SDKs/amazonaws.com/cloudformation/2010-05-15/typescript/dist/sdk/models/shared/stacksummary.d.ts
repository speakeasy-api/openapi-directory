import { SpeakeasyBase } from "../../../internal/utils";
import { StackDriftInformationSummary } from "./stackdriftinformationsummary";
import { StackStatusEnum } from "./stackstatusenum";
/**
 * The StackSummary Data Type
 */
export declare class StackSummary extends SpeakeasyBase {
    creationTime: Date;
    deletionTime?: Date;
    driftInformation?: StackDriftInformationSummary;
    lastUpdatedTime?: Date;
    parentId?: string;
    rootId?: string;
    stackId?: string;
    stackName: string;
    stackStatus: StackStatusEnum;
    stackStatusReason?: string;
    templateDescription?: string;
}
