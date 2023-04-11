import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Warning Source Definition
 */
export declare class WarningWarningSource extends SpeakeasyBase {
    /**
     * A sample input to guide the user when resolving this issu
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
 * The Warning Definition
 */
export declare class Warning extends SpeakeasyBase {
    /**
     * A machine-readable error code from the Canned Messages table, that will enable the API Consumers code to handle this type of error
     */
    code: number;
    /**
     * An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized.
     */
    detail?: string;
    /**
     * The Warning Source Definition
     */
    source?: WarningWarningSource;
    /**
     * An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized
     */
    title: string;
}
