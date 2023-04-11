import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorParameter } from "./errorparameter";
/**
 * Type that defines the fields that can be returned in an error.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * Identifies whether the error was in the REQUEST or happened when running the APPLICATION.
     */
    category?: string;
    /**
     * The primary system where the error occurred. This is relevant for application errors. For Analytics errors, it always has the value API_ANALYTICS.
     */
    domain?: string;
    /**
     * A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms. Traffic report error IDs range from 50001 to 50500.
     */
    errorId?: number;
    /**
     * Identifies specific request elements associated with the error, if any. inputRefId's response is format specific. For JSON, use JSONPath notation.
     */
    inputRefIds?: string[];
    /**
     * A more detailed explanation of the error than given in the message error field.
     */
    longMessage?: string;
    /**
     * Information on how to correct the problem, in the end user's terms and language where applicable. Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale.
     */
    message?: string;
    /**
     * Identifies specific response elements associated with the error, if any. Path format is the same as inputRefId.
     */
    outputRefIds?: string[];
    /**
     * This optional list of name/value pairs that contain context-specific ErrorParameter objects, with each item in the list being a parameter (or input field name) that caused an error condition. Each ErrorParameter object consists of two fields, a name and a value.
     */
    parameters?: ErrorParameter[];
    /**
     * If present, indicates which subsystem in which the error occurred.
     */
    subdomain?: string;
}
