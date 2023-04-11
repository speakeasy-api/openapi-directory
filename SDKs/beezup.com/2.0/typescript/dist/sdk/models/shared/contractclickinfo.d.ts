import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describe the click information related to the offer.
 */
export declare class ContractClickInfo extends SpeakeasyBase {
    /**
     * The addition click price in the offer
     */
    additionalClickPrice?: number;
    /**
     * The click included in the offer
     */
    clickIncluded?: number;
    /**
     * The click included in your current contract
     */
    initialOfferClickIncluded?: number;
}
