import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindCampaignByAdReferenceSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class FindCampaignByAdReferenceRequest extends SpeakeasyBase {
    /**
     * The seller's inventory reference ID of the listing to be used to find the campaign in which it is associated.  This will either be a seller-defined <b>SKU</b> value or inventory item group ID, depending on the reference type specified. You must always pass in both  <b>inventory_reference_id</b> and <b>inventory_reference_type</b>.
     */
    inventoryReferenceId?: string;
    /**
     * The type of the seller's inventory reference ID, which is a listing or group of items. You must always pass in both <b>inventory_reference_id</b> and <b>inventory_reference_type</b>.
     */
    inventoryReferenceType?: string;
    /**
     * Identifier of the eBay listing associated with the ad.
     */
    listingId?: string;
}
export declare class FindCampaignByAdReferenceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    campaigns?: shared.Campaigns;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
