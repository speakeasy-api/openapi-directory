import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
/**
 * Success
 */
export declare class EvaluateMappingTemplateResponse extends SpeakeasyBase {
    error?: ErrorDetail;
    evaluationResult?: string;
    logs?: string[];
}
