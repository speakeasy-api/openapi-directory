import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Context information for an error used for diagnostics.
 */
export declare class ErrorInfo extends SpeakeasyBase {
    /**
     * ID of docker user.
     */
    apiCallDockerId?: string;
    /**
     * Name of the API operation called.
     */
    apiCallName?: string;
    /**
     * Date/time of call start.
     */
    apiCallStart?: string;
    /**
     * Unique ID for this call.
     */
    apiCallTxnid?: string;
}
