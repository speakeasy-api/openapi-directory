import { SpeakeasyBase } from "../../../internal/utils";
import { OwnerEnum } from "./ownerenum";
import { StepGroupStatusEnum } from "./stepgroupstatusenum";
import { Tool } from "./tool";
/**
 * Success
 */
export declare class GetWorkflowStepGroupResponse extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    endTime?: Date;
    id?: string;
    lastModifiedTime?: Date;
    name?: string;
    next?: string[];
    owner?: OwnerEnum;
    previous?: string[];
    status?: StepGroupStatusEnum;
    tools?: Tool[];
    workflowId?: string;
}
