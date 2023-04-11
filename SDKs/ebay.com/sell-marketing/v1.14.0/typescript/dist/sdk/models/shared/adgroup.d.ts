import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * A container for the details of an existing ad group.<br /><br />An ad group can be added to a campaign that uses the Cost Per Click (CPC) funding model. A campaign may have multiple ad groups. All listings that are promoted in the campaign are included in the ad group.<br /><br /><span class="tablenote"><b>Note:</b> This type only applies to the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>
 */
export declare class AdGroup extends SpeakeasyBase {
    /**
     * A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model.
     */
    adGroupId?: string;
    /**
     * An enumeration value representing the current status of the ad group.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdGroupStatusEnum'>eBay API documentation</a>
     */
    adGroupStatus?: string;
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    defaultBid?: Amount;
    /**
     * The seller-defined name of the ad group.
     */
    name?: string;
}
