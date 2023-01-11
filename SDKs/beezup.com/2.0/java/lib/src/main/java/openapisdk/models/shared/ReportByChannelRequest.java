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
 * ReportByChannelRequest
 * Contains common filter parameters
**/
public class ReportByChannelRequest {
    @JsonProperty("advancedFilters")
    public ReportAdvancedFilters advancedFilters;
    public ReportByChannelRequest withAdvancedFilters(ReportAdvancedFilters advancedFilters) {
        this.advancedFilters = advancedFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("beginPeriodUtcDate")
    public OffsetDateTime beginPeriodUtcDate;
    public ReportByChannelRequest withBeginPeriodUtcDate(OffsetDateTime beginPeriodUtcDate) {
        this.beginPeriodUtcDate = beginPeriodUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryFilter")
    public BeezUpCommonCatalogCategoryFilter categoryFilter;
    public ReportByChannelRequest withCategoryFilter(BeezUpCommonCatalogCategoryFilter categoryFilter) {
        this.categoryFilter = categoryFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public ReportByChannelRequest withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endPeriodUtcDate")
    public OffsetDateTime endPeriodUtcDate;
    public ReportByChannelRequest withEndPeriodUtcDate(OffsetDateTime endPeriodUtcDate) {
        this.endPeriodUtcDate = endPeriodUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBy")
    public PerformanceIndicatorTypeEnum orderBy;
    public ReportByChannelRequest withOrderBy(PerformanceIndicatorTypeEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderByDirection")
    public OrderByDirectionEnum orderByDirection;
    public ReportByChannelRequest withOrderByDirection(OrderByDirectionEnum orderByDirection) {
        this.orderByDirection = orderByDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageNumber")
    public Integer pageNumber;
    public ReportByChannelRequest withPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public ReportByChannelRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceIndicatorFilters")
    public PerformanceIndicatorFilter[] performanceIndicatorFilters;
    public ReportByChannelRequest withPerformanceIndicatorFilters(PerformanceIndicatorFilter[] performanceIndicatorFilters) {
        this.performanceIndicatorFilters = performanceIndicatorFilters;
        return this;
    }
    @JsonProperty("periodType")
    public ReportFilterPeriodTypeEnum periodType;
    public ReportByChannelRequest withPeriodType(ReportFilterPeriodTypeEnum periodType) {
        this.periodType = periodType;
        return this;
    }
}