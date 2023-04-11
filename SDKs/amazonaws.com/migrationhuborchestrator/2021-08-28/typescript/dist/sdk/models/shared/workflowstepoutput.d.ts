import { SpeakeasyBase } from "../../../internal/utils";
import { DataTypeEnum } from "./datatypeenum";
import { WorkflowStepOutputUnion } from "./workflowstepoutputunion";
/**
 * The output of a step.
 */
export declare class WorkflowStepOutput extends SpeakeasyBase {
    dataType?: DataTypeEnum;
    name?: string;
    required?: boolean;
    value?: WorkflowStepOutputUnion;
}
