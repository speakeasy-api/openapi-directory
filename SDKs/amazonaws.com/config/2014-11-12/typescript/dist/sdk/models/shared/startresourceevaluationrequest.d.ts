import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationContext } from "./evaluationcontext";
import { EvaluationModeEnum } from "./evaluationmodeenum";
import { ResourceDetails } from "./resourcedetails";
export declare class StartResourceEvaluationRequest extends SpeakeasyBase {
    clientToken?: string;
    evaluationContext?: EvaluationContext;
    evaluationMode: EvaluationModeEnum;
    evaluationTimeout?: number;
    resourceDetails: ResourceDetails;
}
