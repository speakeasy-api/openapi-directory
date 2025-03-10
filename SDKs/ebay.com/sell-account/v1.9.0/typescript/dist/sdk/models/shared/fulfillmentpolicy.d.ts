import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryType } from "./categorytype";
import { RegionSet } from "./regionset";
import { ShippingOption } from "./shippingoption";
import { TimeDuration } from "./timeduration";
/**
 * This type is used by the <b>fulfillmentPolicy</b> response container, a container which defines a seller's fulfillment policy for a specific marketplace.
 */
export declare class FulfillmentPolicy extends SpeakeasyBase {
    /**
     * This container indicates whether the fulfillment policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings.
     */
    categoryTypes?: CategoryType[];
    /**
     * A seller-defined description of the fulfillment policy. This description is only for the seller's use, and is not exposed on any eBay pages. This field is returned if set for the policy. <br/><br/><b>Max length</b>: 250
     */
    description?: string;
    /**
     * If returned as <code>true</code>, the seller offers freight shipping. Freight shipping can be used for large items over 150 lbs.
     */
    freightShipping?: boolean;
    /**
     * A unique eBay-assigned ID for the fulfillment policy. This ID is generated when the policy is created.
     */
    fulfillmentPolicyId?: string;
    /**
     * If returned as <code>true</code>, eBay's Global Shipping Program will be used by the seller to ship items to international locations.<br /><br /><span class="tablenote"><b>Note</b>: On the US marketplace, the <em><b>Global Shipping Program</b></em> is scheduled to be replaced by a new intermediated international shipping program called <em><b>eBay International Shipping</b></em>. US sellers who are opted in to the Global Shipping Program will be automatically opted in to eBay International Shipping when it becomes available to them. All US sellers will be migrated by March 31, 2023. <br /><br />eBay International Shipping is an account level setting, and no field needs to be set in a Fulfillment business policy to enable it. As long as the US seller's account is opted in to eBay International Shipping, this shipping option will be enabled automatically for all listings where international shipping is available. <br /><br />A US seller who is opted in to eBay International Shipping can also specify individual international shipping service options for a Fulfillment business policy.</span>
     */
    globalShipping?: boolean;
    /**
     * A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned.
     */
    handlingTime?: TimeDuration;
    /**
     * If returned as <code>true</code>, local pickup is available for this policy.
     */
    localPickup?: boolean;
    /**
     * The ID of the eBay marketplace to which this fulfillment policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>
     */
    marketplaceId?: string;
    /**
     * A seller-defined name for this fulfillment policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64
     */
    name?: string;
    /**
     * If returned as <code>true</code>, the seller offers the "Click and Collect" option. <br/><br/>Currently, "Click and Collect" is available only to large retail merchants the eBay AU and UK marketplaces.
     */
    pickupDropOff?: boolean;
    /**
     * This type consists of the <b>regionIncluded</b> and <b>regionExcluded</b> arrays, which indicate the areas to where the seller does and doesn't ship.
     */
    shipToLocations?: RegionSet;
    /**
     * This array is used to provide detailed information on the domestic and international shipping options available for the policy. A separate <b>ShippingOption</b> object covers domestic shipping service options and international shipping service options (if the seller ships to international locations). <br /><br />The <b>optionType</b> field indicates whether the <b>ShippingOption</b> object applies to domestic or international shipping, and the <b>costType</b> field indicates whether flat-rate shipping or calculated shipping will be used. <p>A separate <b>ShippingServices</b> object is used to specify cost and other details for every available domestic and international shipping service option. </p>
     */
    shippingOptions?: ShippingOption[];
}
