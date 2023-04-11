import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Exception occurred; see message for details.
 */
export declare class KnownExceptionInfo extends SpeakeasyBase {
    exceptionClassName?: string;
    exceptionStack?: string[];
    message: string;
    rootCauseExceptionClassName?: string;
    rootCauseExceptionStack?: string[];
}
