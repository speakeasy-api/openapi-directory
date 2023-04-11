import { SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";
/**
 * This type contains a list of campaigns.
 */
export declare class Campaigns extends SpeakeasyBase {
    /**
     * This is an array of one or campaigns that match the listing or inventory item group specified in the request.
     */
    campaigns?: Campaign[];
}
