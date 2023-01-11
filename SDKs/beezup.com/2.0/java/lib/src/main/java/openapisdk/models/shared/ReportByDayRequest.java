package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportByDayRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advancedFilters")
    public ReportAdvancedFilters advancedFilters;
    public ReportByDayRequest withAdvancedFilters(ReportAdvancedFilters advancedFilters) {
        this.advancedFilters = advancedFilters;
        return this;
    }
    @JsonProperty("beginPeriodUtcDate")
    public LocalDate beginPeriodUtcDate;
    public ReportByDayRequest withBeginPeriodUtcDate(LocalDate beginPeriodUtcDate) {
        this.beginPeriodUtcDate = beginPeriodUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogCategoryId")
    public String catalogCategoryId;
    public ReportByDayRequest withCatalogCategoryId(String catalogCategoryId) {
        this.catalogCategoryId = catalogCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelIds")
    public String[] channelIds;
    public ReportByDayRequest withChannelIds(String[] channelIds) {
        this.channelIds = channelIds;
        return this;
    }
    @JsonProperty("endPeriodUtcDate")
    public LocalDate endPeriodUtcDate;
    public ReportByDayRequest withEndPeriodUtcDate(LocalDate endPeriodUtcDate) {
        this.endPeriodUtcDate = endPeriodUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public ReportByDayRequest withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}