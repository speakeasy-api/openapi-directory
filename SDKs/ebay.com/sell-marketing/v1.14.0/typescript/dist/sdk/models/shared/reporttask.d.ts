import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { InventoryReference } from "./inventoryreference";
/**
 * This type defines the fields in a report task.
 */
export declare class ReportTask extends SpeakeasyBase {
    /**
     * A list of IDs for the campaigns that are included in the report. A campaign ID is a unique eBay-assigned identifier of the campaign that's generated when the campaign is created.<br /><br />Call <b>getCampaigns</b> to return the current campaign IDs for a seller.
     */
    campaignIds?: string[];
    /**
     * The date defining the start of the timespan covered by the report, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html " title="https://www.iso.org " target="_blank">ISO 8601</a> timestamp.
     */
    dateFrom?: string;
    /**
     * The date defining the end of the timespan covered by the report, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html " title="https://www.iso.org " target="_blank">ISO 8601</a> timestamp.
     */
    dateTo?: string;
    /**
     * A list containing the dimension in the report.
     */
    dimensions?: Dimension[];
    /**
     * The funding model for the campaign that shall be included in the report.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The default funding model for Promoted Listings reports is <code>COST_PER_SALE</code>.</span><br /><br /><b>Valid Values:</b><ul><li><code>COST_PER_SALE</code></li><li><code>COST_PER_CLICK</code></li></ul>
     */
    fundingModels?: string[];
    /**
     * If supplied in the request, this field returns a list of the seller's inventory reference IDs included in the report.  <p>Each item is referenced by a pair of <b>inventoryRefernceID</b> and <b>inventoryReferenceType</b> values, where an inventory reference ID can be either a seller-defined <b>SKU</b> value or an <b>inventoryItemGroupKey</b>. An <b>inventoryItemGroupKey</b> is seller-defined ID for an inventory item group (a multiple-variation listing), and is created and used by the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.</p>
     */
    inventoryReferences?: InventoryReference[];
    /**
     * If supplied in the request, this field returns a list of the listing IDs included in the report. A listing ID is an eBay-assigned ID that's generated when a listing is created.
     */
    listingIds?: string[];
    /**
     * The ID of the eBay marketplace used by the report task. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>
     */
    marketplaceId?: string;
    /**
     * A list of metrics for the report task.
     */
    metricKeys?: string[];
    /**
     * The date after which the report is no longer be available. Reports are available for 30 days and you cannot download a report after it has expired.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ
     */
    reportExpirationDate?: string;
    /**
     * Indicates the format of the report. Currently, only <code>TSV_GZIP</code> is supported. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportFormatEnum'>eBay API documentation</a>
     */
    reportFormat?: string;
    /**
     * The URL of the generated report, which can be used to download the report once it has been generated.
     */
    reportHref?: string;
    /**
     * A unique eBay-assigned ID for the report.
     */
    reportId?: string;
    /**
     * An eBay-assigned name for the report that's created by the <b>createReportTask</b> call. This name is unique for the seller.
     */
    reportName?: string;
    /**
     * The date the report task completed the report generation.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ
     */
    reportTaskCompletionDate?: string;
    /**
     * The date the report task was created.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ
     */
    reportTaskCreationDate?: string;
    /**
     * The date the report task is expected to complete the report generation.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ
     */
    reportTaskExpectedCompletionDate?: string;
    /**
     * The unique eBay-assigned ID of the report task. This value is generated when the report task is created with a call to <b>createReportTask</b>.
     */
    reportTaskId?: string;
    /**
     * Indicates the current state of the report task. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:TaskStatusEnum'>eBay API documentation</a>
     */
    reportTaskStatus?: string;
    /**
     * A status message with additional information about the report task.
     */
    reportTaskStatusMessage?: string;
    /**
     * Indicates type of report associated with the report task.<br/><br/><span class="tablenote"><b>Note:</b> INVENTORY_PERFORMANCE_REPORT is not currently available; availability date is pending.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum'>eBay API documentation</a>
     */
    reportType?: string;
}
