import { SpeakeasyBase } from "../../../internal/utils";
import { CodeError } from "./codeerror";
/**
 * Contains the list of errors from a code evaluation response.
 */
export declare class EvaluateCodeErrorDetail extends SpeakeasyBase {
    codeErrors?: CodeError[];
    message?: string;
}
