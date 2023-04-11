import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorT extends SpeakeasyBase {
    /**
     * Specific internal error string.
     */
    code?: string;
    /**
     * human-readable explanation specific to this occurrence of the problem.
     */
    detail?: string;
    /**
     * Meta object containing non-standard meta-information about the error.
     */
    meta?: Record<string, any>;
    /**
     * Human readable summary of the problem.
     */
    title?: string;
}
