import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type defines the status of a markdown promotion.
 */
export declare class ItemMarkdownStatus extends SpeakeasyBase {
    /**
     * Indicates the state assigned to the markdown promotion using one of the <b>status</b> values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:ItemMarkdownStatusEnum'>eBay API documentation</a>
     */
    listingMarkdownStatus?: string;
    /**
     * Identifies the date the last time the state of the promotion changed. Both both markdown and markup events can trigger a status change.
     */
    statusChangedDate?: string;
    /**
     * An eBay-assigned text string that describes the status of the promotion.
     */
    statusMessage?: string;
}
