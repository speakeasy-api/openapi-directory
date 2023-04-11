import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluateCodeErrorDetail } from "./evaluatecodeerrordetail";
/**
 * Success
 */
export declare class EvaluateCodeResponse extends SpeakeasyBase {
    error?: EvaluateCodeErrorDetail;
    evaluationResult?: string;
    logs?: string[];
}
