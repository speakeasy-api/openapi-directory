import { SpeakeasyBase } from "../../../internal/utils";
import { TimeDuration } from "./timeduration";
/**
 * This type defines the fields for a seller's international return policy. Sellers have the ability to set separate domestic and international return policies, but if an international return policy is not set, the same return policy settings specified for the domestic return policy are also used for returns for international buyers.
 */
export declare class InternationalReturnOverrideType extends SpeakeasyBase {
    /**
     * This field sets/indicates if the seller offers replacement items to the buyer in the case of an international return. The buyer must be willing to accept a replacement item; otherwise, the seller will need to issue a refund for a return. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum'>eBay API documentation</a>
     */
    returnMethod?: string;
    /**
     * A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned.
     */
    returnPeriod?: TimeDuration;
    /**
     * This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either <code>BUYER</code> or <code>SELLER</code>.  <br/><br/>Depending on the return policy and specifics of the return, either the buyer or the seller can be responsible for the return shipping costs. Note that the seller is always responsible for return shipping costs for 'significantly not as described' (SNAD) issues.  <br/><br/>This field is conditionally required if the <b>internationalOverride.returnsAccepted</b> field is set to <code>true</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a>
     */
    returnShippingCostPayer?: string;
    /**
     * If set to <code>true</code>, the seller accepts international returns. If set to <code>false</code>, the seller does not accept international returns.  <br/><br/>This field is conditionally required if the seller chooses to have a separate international return policy.
     */
    returnsAccepted?: boolean;
}
