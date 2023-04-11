import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK - the request has succeeded.
 */
export declare class DisablePermitResult extends SpeakeasyBase {
    /**
     * A unique reference associated with the request. This value is globally unique; quote it when communicating with us about this request.
     */
    pspReference?: string;
    /**
     * Status of the disable request.
     */
    status?: string;
}
