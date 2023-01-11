package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportByChannel {
    @JsonProperty("catalogProductCount")
    public Long catalogProductCount;
    public ReportByChannel withCatalogProductCount(Long catalogProductCount) {
        this.catalogProductCount = catalogProductCount;
        return this;
    }
    @JsonProperty("channel")
    public BeezUpCommonChannelBasicInfo channel;
    public ReportByChannel withChannel(BeezUpCommonChannelBasicInfo channel) {
        this.channel = channel;
        return this;
    }
    @JsonProperty("clickCount")
    public Long clickCount;
    public ReportByChannel withClickCount(Long clickCount) {
        this.clickCount = clickCount;
        return this;
    }
    @JsonProperty("cost")
    public Double cost;
    public ReportByChannel withCost(Double cost) {
        this.cost = cost;
        return this;
    }
    @JsonProperty("enabledProductCount")
    public Long enabledProductCount;
    public ReportByChannel withEnabledProductCount(Long enabledProductCount) {
        this.enabledProductCount = enabledProductCount;
        return this;
    }
    @JsonProperty("links")
    public ReportByChannelLinks links;
    public ReportByChannel withLinks(ReportByChannelLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("margin")
    public Double margin;
    public ReportByChannel withMargin(Double margin) {
        this.margin = margin;
        return this;
    }
    @JsonProperty("orderCount")
    public Long orderCount;
    public ReportByChannel withOrderCount(Long orderCount) {
        this.orderCount = orderCount;
        return this;
    }
    @JsonProperty("performanceIndicator")
    public Double performanceIndicator;
    public ReportByChannel withPerformanceIndicator(Double performanceIndicator) {
        this.performanceIndicator = performanceIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roi")
    public Double roi;
    public ReportByChannel withRoi(Double roi) {
        this.roi = roi;
        return this;
    }
    @JsonProperty("soldProductCount")
    public Long soldProductCount;
    public ReportByChannel withSoldProductCount(Long soldProductCount) {
        this.soldProductCount = soldProductCount;
        return this;
    }
    @JsonProperty("totalSales")
    public Double totalSales;
    public ReportByChannel withTotalSales(Double totalSales) {
        this.totalSales = totalSales;
        return this;
    }
}