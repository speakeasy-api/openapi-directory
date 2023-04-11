import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The container for the filter fields. This container is used to set the filter criteria for the order report. A seller can retrieve listings for a specified format.
 */
export declare class InventoryFilterCriteria extends SpeakeasyBase {
    /**
     * The type of buying option for the order. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:ListingFormatEnum'>eBay API documentation</a>
     */
    listingFormat?: string;
}
