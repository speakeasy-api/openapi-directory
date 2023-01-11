package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportByProduct {
    @JsonProperty("channelCount")
    public Long channelCount;
    public ReportByProduct withChannelCount(Long channelCount) {
        this.channelCount = channelCount;
        return this;
    }
    @JsonProperty("clickCount")
    public Long clickCount;
    public ReportByProduct withClickCount(Long clickCount) {
        this.clickCount = clickCount;
        return this;
    }
    @JsonProperty("cost")
    public Double cost;
    public ReportByProduct withCost(Double cost) {
        this.cost = cost;
        return this;
    }
    @JsonProperty("enabledOnChannelCount")
    public Long enabledOnChannelCount;
    public ReportByProduct withEnabledOnChannelCount(Long enabledOnChannelCount) {
        this.enabledOnChannelCount = enabledOnChannelCount;
        return this;
    }
    @JsonProperty("links")
    public ReportByProductLinks links;
    public ReportByProduct withLinks(ReportByProductLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("margin")
    public Double margin;
    public ReportByProduct withMargin(Double margin) {
        this.margin = margin;
        return this;
    }
    @JsonProperty("orderCount")
    public Long orderCount;
    public ReportByProduct withOrderCount(Long orderCount) {
        this.orderCount = orderCount;
        return this;
    }
    @JsonProperty("performanceIndicator")
    public Double performanceIndicator;
    public ReportByProduct withPerformanceIndicator(Double performanceIndicator) {
        this.performanceIndicator = performanceIndicator;
        return this;
    }
    @JsonProperty("product")
    public BeezUpCommonProductBasicInfo product;
    public ReportByProduct withProduct(BeezUpCommonProductBasicInfo product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roi")
    public Double roi;
    public ReportByProduct withRoi(Double roi) {
        this.roi = roi;
        return this;
    }
    @JsonProperty("soldProductCount")
    public Long soldProductCount;
    public ReportByProduct withSoldProductCount(Long soldProductCount) {
        this.soldProductCount = soldProductCount;
        return this;
    }
    @JsonProperty("totalSales")
    public Double totalSales;
    public ReportByProduct withTotalSales(Double totalSales) {
        this.totalSales = totalSales;
        return this;
    }
}