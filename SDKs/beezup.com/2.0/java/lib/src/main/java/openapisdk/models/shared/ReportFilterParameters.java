package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ReportFilterParameters
 * Contains common filter parameters
**/
public class ReportFilterParameters {
    @JsonProperty("advancedFilters")
    public ReportAdvancedFilters advancedFilters;
    public ReportFilterParameters withAdvancedFilters(ReportAdvancedFilters advancedFilters) {
        this.advancedFilters = advancedFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyticsProductColumnFilters")
    public AnalyticsProductColumnFilters analyticsProductColumnFilters;
    public ReportFilterParameters withAnalyticsProductColumnFilters(AnalyticsProductColumnFilters analyticsProductColumnFilters) {
        this.analyticsProductColumnFilters = analyticsProductColumnFilters;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("beginPeriodUtcDate")
    public OffsetDateTime beginPeriodUtcDate;
    public ReportFilterParameters withBeginPeriodUtcDate(OffsetDateTime beginPeriodUtcDate) {
        this.beginPeriodUtcDate = beginPeriodUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryFilter")
    public BeezUpCommonCatalogCategoryFilter categoryFilter;
    public ReportFilterParameters withCategoryFilter(BeezUpCommonCatalogCategoryFilter categoryFilter) {
        this.categoryFilter = categoryFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public ReportFilterParameters withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endPeriodUtcDate")
    public OffsetDateTime endPeriodUtcDate;
    public ReportFilterParameters withEndPeriodUtcDate(OffsetDateTime endPeriodUtcDate) {
        this.endPeriodUtcDate = endPeriodUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceIndicatorFilters")
    public PerformanceIndicatorFilter[] performanceIndicatorFilters;
    public ReportFilterParameters withPerformanceIndicatorFilters(PerformanceIndicatorFilter[] performanceIndicatorFilters) {
        this.performanceIndicatorFilters = performanceIndicatorFilters;
        return this;
    }
    @JsonProperty("periodType")
    public ReportFilterPeriodTypeEnum periodType;
    public ReportFilterParameters withPeriodType(ReportFilterPeriodTypeEnum periodType) {
        this.periodType = periodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productColumnsToDisplay")
    public String[] productColumnsToDisplay;
    public ReportFilterParameters withProductColumnsToDisplay(String[] productColumnsToDisplay) {
        this.productColumnsToDisplay = productColumnsToDisplay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productState")
    public ProductStateFilterEnum productState;
    public ReportFilterParameters withProductState(ProductStateFilterEnum productState) {
        this.productState = productState;
        return this;
    }
    @JsonProperty("reportType")
    public ReportTypeEnum reportType;
    public ReportFilterParameters withReportType(ReportTypeEnum reportType) {
        this.reportType = reportType;
        return this;
    }
}