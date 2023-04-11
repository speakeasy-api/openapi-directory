import { SpeakeasyBase } from "../../../internal/utils";
export declare class Error400ErrorErrorSource extends SpeakeasyBase {
    /**
     * A sample input to guide the user when resolving this issue
     */
    example?: string;
    /**
     * The key of the URI path or query parameter that caused the error
     */
    parameter?: string;
    /**
     * A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error
     */
    pointer?: string;
}
/**
 * The Error Definition
 */
export declare class Error400Error extends SpeakeasyBase {
    /**
     * A machine-readable error code from the Amadeus Canned Messages table, that will enable the API Consumers code to handle this type of error
     */
    code?: number;
    /**
     * An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized.
     */
    detail?: string;
    source?: Error400ErrorErrorSource;
    /**
     * The [HTTP status code](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) of this response. This is present only in terminal errors which cause an unsuccessful response. In the case of multiple errors, they must all have the same status.
     */
    status?: number;
    /**
     * An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized
     */
    title?: string;
}
/**
 * A set of errors
 */
export declare class Error400 extends SpeakeasyBase {
    errors?: Error400Error[];
}
