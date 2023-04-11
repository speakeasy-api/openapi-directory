import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { WorkflowStep } from "./workflowstep";
export declare class CreateWorkflowRequest extends SpeakeasyBase {
    description?: string;
    onExceptionSteps?: WorkflowStep[];
    steps: WorkflowStep[];
    tags?: Tag[];
}
