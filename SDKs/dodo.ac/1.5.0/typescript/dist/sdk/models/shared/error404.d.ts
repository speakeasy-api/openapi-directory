import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Not found.
 */
export declare class Error404 extends SpeakeasyBase {
    /**
     * A more in-depth description of the issue, including parameters and/or error text when available.
     */
    details?: string;
    /**
     * A brief title describing the error.
     */
    title?: string;
}
