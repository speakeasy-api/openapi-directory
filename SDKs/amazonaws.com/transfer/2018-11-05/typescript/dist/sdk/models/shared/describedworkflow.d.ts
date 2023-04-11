import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { WorkflowStep } from "./workflowstep";
/**
 * Describes the properties of the specified workflow
 */
export declare class DescribedWorkflow extends SpeakeasyBase {
    arn: string;
    description?: string;
    onExceptionSteps?: WorkflowStep[];
    steps?: WorkflowStep[];
    tags?: Tag[];
    workflowId?: string;
}
