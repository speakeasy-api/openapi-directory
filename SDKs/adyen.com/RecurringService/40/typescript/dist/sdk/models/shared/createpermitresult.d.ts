import { SpeakeasyBase } from "../../../internal/utils";
import { PermitResult } from "./permitresult";
/**
 * OK - the request has succeeded.
 */
export declare class CreatePermitResult extends SpeakeasyBase {
    /**
     * List of new permits.
     */
    permitResultList?: PermitResult[];
    /**
     * A unique reference associated with the request. This value is globally unique; quote it when communicating with us about this request.
     */
    pspReference?: string;
}
