import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeSourceEnum } from "./changesourceenum";
import { EvaluationTypeEnum } from "./evaluationtypeenum";
import { ResourceTargetDefinition } from "./resourcetargetdefinition";
/**
 * For a resource with <code>Modify</code> as the action, the <code>ResourceChange</code> structure describes the changes CloudFormation will make to that resource.
 */
export declare class ResourceChangeDetail extends SpeakeasyBase {
    causingEntity?: string;
    changeSource?: ChangeSourceEnum;
    evaluation?: EvaluationTypeEnum;
    target?: ResourceTargetDefinition;
}
