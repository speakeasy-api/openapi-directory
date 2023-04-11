import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAdsByInventoryReferenceSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetAdsByInventoryReferenceRequest extends SpeakeasyBase {
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
    /**
     * The inventory reference ID associated with the ad you want returned. A seller's inventory reference ID is the ID of either a listing or the ID of an inventory item group (the parent of a multi-variation listing, such as a shirt that is available in multiple sizes and colors). You must always supply in both an <b>inventory_reference_id</b> and an <b>inventory_reference_type</b>.
     */
    inventoryReferenceId: string;
    /**
     * The type of the inventory reference ID. Set this value to either <code>INVENTORY_ITEM</CODE> (a single listing) or <code>INVENTORY_ITEM_GROUP</CODE> (a multi-variation listing). You must always pass in both an <b>inventory_reference_id</b> and an <b>inventory_reference_type</b>.
     */
    inventoryReferenceType: string;
}
export declare class GetAdsByInventoryReferenceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    ads?: shared.Ads;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
