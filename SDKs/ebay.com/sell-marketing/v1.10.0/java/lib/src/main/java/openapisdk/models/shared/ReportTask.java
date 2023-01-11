package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportTask
 * This type defines the fields in a report task.
**/
public class ReportTask {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignIds")
    public String[] campaignIds;
    public ReportTask withCampaignIds(String[] campaignIds) {
        this.campaignIds = campaignIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateFrom")
    public String dateFrom;
    public ReportTask withDateFrom(String dateFrom) {
        this.dateFrom = dateFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateTo")
    public String dateTo;
    public ReportTask withDateTo(String dateTo) {
        this.dateTo = dateTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimension[] dimensions;
    public ReportTask withDimensions(Dimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryReferences")
    public InventoryReference[] inventoryReferences;
    public ReportTask withInventoryReferences(InventoryReference[] inventoryReferences) {
        this.inventoryReferences = inventoryReferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingIds")
    public String[] listingIds;
    public ReportTask withListingIds(String[] listingIds) {
        this.listingIds = listingIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public ReportTask withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricKeys")
    public String[] metricKeys;
    public ReportTask withMetricKeys(String[] metricKeys) {
        this.metricKeys = metricKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportExpirationDate")
    public String reportExpirationDate;
    public ReportTask withReportExpirationDate(String reportExpirationDate) {
        this.reportExpirationDate = reportExpirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportFormat")
    public String reportFormat;
    public ReportTask withReportFormat(String reportFormat) {
        this.reportFormat = reportFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportHref")
    public String reportHref;
    public ReportTask withReportHref(String reportHref) {
        this.reportHref = reportHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportId")
    public String reportId;
    public ReportTask withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportName")
    public String reportName;
    public ReportTask withReportName(String reportName) {
        this.reportName = reportName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTaskCompletionDate")
    public String reportTaskCompletionDate;
    public ReportTask withReportTaskCompletionDate(String reportTaskCompletionDate) {
        this.reportTaskCompletionDate = reportTaskCompletionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTaskCreationDate")
    public String reportTaskCreationDate;
    public ReportTask withReportTaskCreationDate(String reportTaskCreationDate) {
        this.reportTaskCreationDate = reportTaskCreationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTaskExpectedCompletionDate")
    public String reportTaskExpectedCompletionDate;
    public ReportTask withReportTaskExpectedCompletionDate(String reportTaskExpectedCompletionDate) {
        this.reportTaskExpectedCompletionDate = reportTaskExpectedCompletionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTaskId")
    public String reportTaskId;
    public ReportTask withReportTaskId(String reportTaskId) {
        this.reportTaskId = reportTaskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTaskStatus")
    public String reportTaskStatus;
    public ReportTask withReportTaskStatus(String reportTaskStatus) {
        this.reportTaskStatus = reportTaskStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTaskStatusMessage")
    public String reportTaskStatusMessage;
    public ReportTask withReportTaskStatusMessage(String reportTaskStatusMessage) {
        this.reportTaskStatusMessage = reportTaskStatusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportType")
    public String reportType;
    public ReportTask withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
}