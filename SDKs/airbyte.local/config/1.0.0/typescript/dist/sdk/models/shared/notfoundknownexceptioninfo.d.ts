import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object with given id was not found.
 */
export declare class NotFoundKnownExceptionInfo extends SpeakeasyBase {
    exceptionClassName?: string;
    exceptionStack?: string[];
    id?: string;
    message: string;
    rootCauseExceptionClassName?: string;
    rootCauseExceptionStack?: string[];
}
