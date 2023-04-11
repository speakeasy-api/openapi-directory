import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unauthorized.
 */
export declare class Error401 extends SpeakeasyBase {
    /**
     * A more in-depth description of the issue, including parameters and/or error text when available.
     */
    details?: string;
    /**
     * A brief title describing the error.
     */
    title?: string;
}
