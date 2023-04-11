import { SpeakeasyBase } from "../../../internal/utils";
import { EbayFulfillmentProgram } from "./ebayfulfillmentprogram";
import { EbayInternationalShipping } from "./ebayinternationalshipping";
import { EbayShipping } from "./ebayshipping";
import { EbayVaultProgram } from "./ebayvaultprogram";
import { PostSaleAuthenticationProgram } from "./postsaleauthenticationprogram";
/**
 * This type is returned for order line items eligible for the Authenticity Guarantee service and/or for order line items fulfilled by the eBay Fulfillment program or eBay shipping.
 */
export declare class Program extends SpeakeasyBase {
    /**
     * This type is used to provide the status and outcome of an order line item going through the Authenticity Guarantee verification process.
     */
    authenticityVerification?: PostSaleAuthenticationProgram;
    /**
     * This type is used to provide details about an order line item being managed through eBay International Shipping.
     */
    ebayInternationalShipping?: EbayInternationalShipping;
    /**
     * This type contains information about the management of the shipping for the order.
     */
    ebayShipping?: EbayShipping;
    ebayVault?: EbayVaultProgram;
    /**
     * This type is used to provide details about an order line item being fulfilled by eBay or an eBay fulfillment partner.
     */
    fulfillmentProgram?: EbayFulfillmentProgram;
}
