import { SpeakeasyBase } from "../../../internal/utils";
import { Tool } from "./tool";
/**
 * Success
 */
export declare class CreateWorkflowStepGroupResponse extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    id?: string;
    name?: string;
    next?: string[];
    previous?: string[];
    tools?: Tool[];
    workflowId?: string;
}
