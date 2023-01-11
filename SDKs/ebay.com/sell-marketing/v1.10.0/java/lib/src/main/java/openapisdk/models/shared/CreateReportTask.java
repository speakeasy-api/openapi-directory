package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateReportTask
 * This type defines the rules that govern the generation of a report task and the criteria that's used to create the report. The report-generation rules include the starting and ending dates for the report. Report-task criteria includes the report dimensions, metrics, listings covered in the report, and so on. For information on the required and optional fields for each report type, see Reading Promoted Listings reports.
**/
public class CreateReportTask {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignIds")
    public String[] campaignIds;
    public CreateReportTask withCampaignIds(String[] campaignIds) {
        this.campaignIds = campaignIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateFrom")
    public String dateFrom;
    public CreateReportTask withDateFrom(String dateFrom) {
        this.dateFrom = dateFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateTo")
    public String dateTo;
    public CreateReportTask withDateTo(String dateTo) {
        this.dateTo = dateTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimension[] dimensions;
    public CreateReportTask withDimensions(Dimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryReferences")
    public InventoryReference[] inventoryReferences;
    public CreateReportTask withInventoryReferences(InventoryReference[] inventoryReferences) {
        this.inventoryReferences = inventoryReferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingIds")
    public String[] listingIds;
    public CreateReportTask withListingIds(String[] listingIds) {
        this.listingIds = listingIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public CreateReportTask withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricKeys")
    public String[] metricKeys;
    public CreateReportTask withMetricKeys(String[] metricKeys) {
        this.metricKeys = metricKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportFormat")
    public String reportFormat;
    public CreateReportTask withReportFormat(String reportFormat) {
        this.reportFormat = reportFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportType")
    public String reportType;
    public CreateReportTask withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
}