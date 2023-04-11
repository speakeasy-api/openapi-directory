import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type that is used to provide the seller's eligibility status for an eBay advertising program.
 */
export declare class SellerEligibilityResponse extends SpeakeasyBase {
    /**
     * The eBay advertising program for which a seller may be eligible. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/plser:AdvertisingProgramEnum'>eBay API documentation</a>
     */
    programType?: string;
    /**
     * The reason why a seller is ineligible for the specified eBay advertising program.<br /><br />This field is only returned if the seller is ineligible for the eBay advertising program. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/plser:SellerIneligibleReasonEnum'>eBay API documentation</a>
     */
    reason?: string;
    /**
     * The seller elibibilty status for the specified eBay advertising program. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/cmlib:SellerEligibilityEnum'>eBay API documentation</a>
     */
    status?: string;
}
