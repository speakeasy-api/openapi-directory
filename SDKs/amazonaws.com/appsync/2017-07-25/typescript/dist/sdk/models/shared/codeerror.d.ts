import { SpeakeasyBase } from "../../../internal/utils";
import { CodeErrorLocation } from "./codeerrorlocation";
/**
 * Describes an AppSync error.
 */
export declare class CodeError extends SpeakeasyBase {
    errorType?: string;
    location?: CodeErrorLocation;
    value?: string;
}
