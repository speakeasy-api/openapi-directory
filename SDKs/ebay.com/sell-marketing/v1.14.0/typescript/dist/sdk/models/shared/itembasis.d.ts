import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A container for details regarding the basis for an item.
 */
export declare class ItemBasis extends SpeakeasyBase {
    /**
     * The estimated value of the search impressions for items based on the provided dimensions. <br /><br /><b>Duration:</b> 17 days<br /><br /><b>Total slots:</b> 200 <br /><br /><b>Channel:</b> Dweb, Mweb, Native
     */
    estimatedValue?: number;
    /**
     * The basis of the statistics. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:TargetingMetricsEnum'>eBay API documentation</a>
     */
    metric?: string;
}
