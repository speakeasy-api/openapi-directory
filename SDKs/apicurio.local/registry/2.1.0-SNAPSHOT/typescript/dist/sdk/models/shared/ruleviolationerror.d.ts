import { SpeakeasyBase } from "../../../internal/utils";
import { RuleViolationCause } from "./ruleviolationcause";
/**
 * All error responses, whether `4xx` or `5xx` will include one of these as the response
 * body.
**/
export declare class RuleViolationError extends SpeakeasyBase {
    causes: RuleViolationCause[];
    detail?: string;
    errorCode?: number;
    message?: string;
    name?: string;
}
