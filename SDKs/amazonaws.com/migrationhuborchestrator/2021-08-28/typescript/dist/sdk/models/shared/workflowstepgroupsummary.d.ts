import { SpeakeasyBase } from "../../../internal/utils";
import { OwnerEnum } from "./ownerenum";
import { StepGroupStatusEnum } from "./stepgroupstatusenum";
/**
 * The summary of a step group in a workflow.
 */
export declare class WorkflowStepGroupSummary extends SpeakeasyBase {
    id?: string;
    name?: string;
    next?: string[];
    owner?: OwnerEnum;
    previous?: string[];
    status?: StepGroupStatusEnum;
}
