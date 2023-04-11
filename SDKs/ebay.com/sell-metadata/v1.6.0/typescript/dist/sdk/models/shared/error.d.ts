import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorParameter } from "./errorparameter";
/**
 * A container that defines the elements of error and warning messages.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * The category type for this error or warning. It takes an ErrorCategory object which can have one of three values:<ul><li><code>Application</code>: Indicates an exception or error occurred in the application code or at runtime. Examples include catching an exception in a service's business logic, system failures, or request errors from a dependency.</li><li><code>Business</code>: Used when your service or a dependent service refused to continue processing on the resource because of a business rule violation such as "Seller does not ship item to Antarctica" or "Buyer ineligible to purchase an alcoholic item". Business errors are not syntactical input errors.</li><li><code>Request</code>: Used when there is anything wrong with the request, such as authentication, syntactical errors, rate limiting or missing headers, bad HTTP header values, and so on.</li></ul>
     */
    category?: string;
    /**
     * Name of the domain containing the service or application.
     */
    domain?: string;
    /**
     * A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.
     */
    errorId?: number;
    /**
     * Identifies specific request elements associated with the error, if any. inputRefId's response is format specific. For JSON, use <i>JSONPath</i> notation.
     */
    inputRefIds?: string[];
    /**
     * An expanded version of message that should be around 100-200 characters long, but is not required to be such.
     */
    longMessage?: string;
    /**
     * An end user and app developer friendly device agnostic message. It explains what the error or warning is, and how to fix it (in a general sense). Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale.
     */
    message?: string;
    /**
     * Identifies specific response elements associated with the error, if any. Path format is the same as <code>inputRefId</code>.
     */
    outputRefIds?: string[];
    /**
     * This optional complex field type contains a list of one or more context-specific <code>ErrorParameter</code> objects, with each item in the list entry being a parameter (or input field name) that caused an error condition. Each <code>ErrorParameter</code> object consists of two fields, a <code>name</code> and a <code>value</code>.
     */
    parameters?: ErrorParameter[];
    /**
     * Name of the domain's subsystem or subdivision. For example, checkout is a subdomain in the buying domain.
     */
    subdomain?: string;
}
