import { SpeakeasyBase } from "../../../internal/utils";
import { Tool } from "./tool";
/**
 * Success
 */
export declare class UpdateWorkflowStepGroupResponse extends SpeakeasyBase {
    description?: string;
    id?: string;
    lastModifiedTime?: Date;
    name?: string;
    next?: string[];
    previous?: string[];
    tools?: Tool[];
    workflowId?: string;
}
