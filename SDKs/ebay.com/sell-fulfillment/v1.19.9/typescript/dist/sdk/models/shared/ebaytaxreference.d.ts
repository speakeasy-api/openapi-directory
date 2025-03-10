import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type describes the VAT tax details. The eBay VAT tax type and the eBay VAT identifier number will be returned if a VAT tax is applicable for the order. Note: On January 31, 2022, the orders.fulfillmentStartInstructions.shippingStep.shipTo.contactAddress.addressLine2 will stop being used to return VAT information, so developers should make sure they integrate with the new fields before that time.
**/
export declare class EbayTaxReference extends SpeakeasyBase {
    name?: string;
    value?: string;
}
