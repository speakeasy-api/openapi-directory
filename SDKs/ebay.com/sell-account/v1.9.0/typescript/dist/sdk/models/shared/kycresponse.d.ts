import { SpeakeasyBase } from "../../../internal/utils";
import { KycCheck } from "./kyccheck";
/**
 * This is the base response type of the <b>getKYC</b> method.
 */
export declare class KycResponse extends SpeakeasyBase {
    /**
     * This array contains one or more KYC checks required from a managed payments seller. The seller may need to provide more documentation and/or information about themselves, their company, or the bank account they are using for seller payouts.<br/><br/>If no KYC checks are currently required from the seller, this array is not returned, and the seller only receives a <code>204 No Content</code> HTTP status code.
     */
    kycChecks?: KycCheck[];
}
