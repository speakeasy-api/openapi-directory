import { SpeakeasyBase } from "../../../internal/utils";
import { SelectionRule } from "./selectionrule";
/**
 * This type defines the fields for specifying the criterion (selection rule) settings of an ad campaign. If you populate the campaignCriterion object in your <b>createCampaign</b> request, ads for the campaign are created by rule for the listings that meet the criteria you specify, and these ads are associated with the newly created campaign.
 */
export declare class CampaignCriterion extends SpeakeasyBase {
    /**
     * A field used to indicate whether listings shall be automatically added to, or removed from, a Promoted Listings campaign based on the rules that have been configured for the campaign.<br /><br />If set to <code>true</code>, eBay adds all listings matching the campaign criterion to the campaign, including any new listings created from the items in a seller's inventory.<br /><br /><b>Default:</b> <code>false</code>
     */
    autoSelectFutureInventory?: boolean;
    /**
     * This enum defines the criterion (selection rule) types. Currently, the only criterion type supported is <code>INVENTORY_PARTITION</code>, and you must specify this value if you manage your items with the Inventory API and you want to include items based on their inventory reference IDs.  <br><br>Do not include this field if you manage your listings with Trading API/legacy model. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:CriterionTypeEnum'>eBay API documentation</a>
     */
    criterionType?: string;
    /**
     * This container shows all of the rules/inclusion filters used to add listings to the campaign.
     */
    selectionRules?: SelectionRule[];
}
