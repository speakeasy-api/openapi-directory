import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response for Create Campaign API
 */
export declare class CreateCampaignResponse extends SpeakeasyBase {
    /**
     * The resource name of an Amazon Connect campaign.
     */
    arn?: string;
    /**
     * Identifier representing a Campaign
     */
    id?: string;
    /**
     * Tag map with key and value.
     */
    tags?: Record<string, string>;
}
