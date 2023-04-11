import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorParameter } from "./errorparameter";
/**
 * The type that defines the fields that can be returned in an error.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * This string value indicates the error category. There are three categories of errors: request errors, application errors, and system errors.
     */
    category?: string;
    /**
     * The name of the primary system where the error occurred. This is relevant for application errors.
     */
    domain?: string;
    /**
     * A unique code that identifies the particular error or warning that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.
     */
    errorId?: number;
    /**
     * An array of reference IDs that identify the specific request elements most closely associated to the error or warning, if any.
     */
    inputRefIds?: string[];
    /**
     * A detailed description of the condition that caused the error or warning, and information on what to do to correct the problem.
     */
    longMessage?: string;
    /**
     * A description of the condition that caused the error or warning.
     */
    message?: string;
    /**
     * An array of reference IDs that identify the specific response elements most closely associated to the error or warning, if any.
     */
    outputRefIds?: string[];
    /**
     * An array of warning and error messages that return one or more variables contextual information about the error or warning. This is often the field or value that triggered the error or warning.
     */
    parameters?: ErrorParameter[];
    /**
     * The name of the subdomain in which the error or warning occurred.
     */
    subdomain?: string;
}
