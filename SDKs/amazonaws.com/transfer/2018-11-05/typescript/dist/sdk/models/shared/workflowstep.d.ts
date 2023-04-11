import { SpeakeasyBase } from "../../../internal/utils";
import { CopyStepDetails } from "./copystepdetails";
import { CustomStepDetails } from "./customstepdetails";
import { DecryptStepDetails } from "./decryptstepdetails";
import { DeleteStepDetails } from "./deletestepdetails";
import { TagStepDetails } from "./tagstepdetails";
import { WorkflowStepTypeEnum } from "./workflowsteptypeenum";
/**
 * The basic building block of a workflow.
 */
export declare class WorkflowStep extends SpeakeasyBase {
    copyStepDetails?: CopyStepDetails;
    customStepDetails?: CustomStepDetails;
    decryptStepDetails?: DecryptStepDetails;
    deleteStepDetails?: DeleteStepDetails;
    tagStepDetails?: TagStepDetails;
    type?: WorkflowStepTypeEnum;
}
