import { SpeakeasyBase } from "../../../internal/utils";
import { SellerEligibilityResponse } from "./sellereligibilityresponse";
/**
 * The base response of the <b>getAdvertisingEligibility</b> method that contains the seller eligibility information for one or more advertising programs.
 */
export declare class SellerEligibilityMultiProgramResponse extends SpeakeasyBase {
    /**
     * An array of response fields that define the seller eligibility for eBay adverstising programs.
     */
    advertisingEligibility?: SellerEligibilityResponse[];
}
