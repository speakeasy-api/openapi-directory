import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Bad request (often an invalid input).
 */
export declare class Error400 extends SpeakeasyBase {
    /**
     * A more in-depth description of the issue, including parameters and/or error text when available.
     */
    details?: string;
    /**
     * A brief title describing the error.
     */
    title?: string;
}
