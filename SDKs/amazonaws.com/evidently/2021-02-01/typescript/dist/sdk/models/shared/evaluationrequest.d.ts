import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This structure assigns a feature variation to one user session.
 */
export declare class EvaluationRequest extends SpeakeasyBase {
    entityId: string;
    evaluationContext?: string;
    feature: string;
}
