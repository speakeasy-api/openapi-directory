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
 * OptimiseRequest
 * Contains common filter parameters
**/
public class OptimiseRequest {
    @JsonProperty("advancedFilters")
    public ReportAdvancedFilters advancedFilters;
    public OptimiseRequest withAdvancedFilters(ReportAdvancedFilters advancedFilters) {
        this.advancedFilters = advancedFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyticsProductColumnFilters")
    public AnalyticsProductColumnFilters analyticsProductColumnFilters;
    public OptimiseRequest withAnalyticsProductColumnFilters(AnalyticsProductColumnFilters analyticsProductColumnFilters) {
        this.analyticsProductColumnFilters = analyticsProductColumnFilters;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("beginPeriodUtcDate")
    public OffsetDateTime beginPeriodUtcDate;
    public OptimiseRequest withBeginPeriodUtcDate(OffsetDateTime beginPeriodUtcDate) {
        this.beginPeriodUtcDate = beginPeriodUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryFilter")
    public BeezUpCommonCatalogCategoryFilter categoryFilter;
    public OptimiseRequest withCategoryFilter(BeezUpCommonCatalogCategoryFilter categoryFilter) {
        this.categoryFilter = categoryFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public OptimiseRequest withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endPeriodUtcDate")
    public OffsetDateTime endPeriodUtcDate;
    public OptimiseRequest withEndPeriodUtcDate(OffsetDateTime endPeriodUtcDate) {
        this.endPeriodUtcDate = endPeriodUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBy")
    public PerformanceIndicatorTypeEnum orderBy;
    public OptimiseRequest withOrderBy(PerformanceIndicatorTypeEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderByDirection")
    public OrderByDirectionEnum orderByDirection;
    public OptimiseRequest withOrderByDirection(OrderByDirectionEnum orderByDirection) {
        this.orderByDirection = orderByDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageNumber")
    public Integer pageNumber;
    public OptimiseRequest withPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public OptimiseRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceIndicatorFilters")
    public PerformanceIndicatorFilter[] performanceIndicatorFilters;
    public OptimiseRequest withPerformanceIndicatorFilters(PerformanceIndicatorFilter[] performanceIndicatorFilters) {
        this.performanceIndicatorFilters = performanceIndicatorFilters;
        return this;
    }
    @JsonProperty("periodType")
    public ReportFilterPeriodTypeEnum periodType;
    public OptimiseRequest withPeriodType(ReportFilterPeriodTypeEnum periodType) {
        this.periodType = periodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productColumnsToDisplay")
    public String[] productColumnsToDisplay;
    public OptimiseRequest withProductColumnsToDisplay(String[] productColumnsToDisplay) {
        this.productColumnsToDisplay = productColumnsToDisplay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productState")
    public ProductStateFilterEnum productState;
    public OptimiseRequest withProductState(ProductStateFilterEnum productState) {
        this.productState = productState;
        return this;
    }
    @JsonProperty("reportType")
    public ReportTypeEnum reportType;
    public OptimiseRequest withReportType(ReportTypeEnum reportType) {
        this.reportType = reportType;
        return this;
    }
}