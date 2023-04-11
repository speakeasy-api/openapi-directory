import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An API Error response
 */
export declare class FlatErrorResponse extends SpeakeasyBase {
    /**
     * A corresponding code for this error
     */
    code?: string;
    /**
     * An unique error identifier generated for the request
     */
    id?: string;
    /**
     * A printable message for this message
     */
    message?: string;
    /**
     * The related parameter that caused the error
     */
    param?: string;
}
