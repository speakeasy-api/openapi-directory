import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type that defines the data produced for additional information about suggested keywords.
 */
export declare class AdditionalInfoData extends SpeakeasyBase {
    /**
     * The metric used to provide additional information for the suggested keyword.<br /><br /><strong>Valid Values:</strong> <ul><li><code>ACTIVE_SELLER_COUNT</code></li><li><code>SEARCH_VOLUME</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MetricEnum'>eBay API documentation</a>
     */
    metricKey?: string;
    /**
     * The data provided for the specified metric.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> All metric data is compiled for the marketplace associated with the specified campaign ID.</span>
     */
    value?: string;
}
