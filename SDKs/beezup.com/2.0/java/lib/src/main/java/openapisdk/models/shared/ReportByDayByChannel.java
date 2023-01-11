package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReportByDayByChannel {
    @JsonProperty("channel")
    public BeezUpCommonChannelBasicInfo channel;
    public ReportByDayByChannel withChannel(BeezUpCommonChannelBasicInfo channel) {
        this.channel = channel;
        return this;
    }
    @JsonProperty("clickCount")
    public Long clickCount;
    public ReportByDayByChannel withClickCount(Long clickCount) {
        this.clickCount = clickCount;
        return this;
    }
    @JsonProperty("cost")
    public Double cost;
    public ReportByDayByChannel withCost(Double cost) {
        this.cost = cost;
        return this;
    }
    @JsonProperty("margin")
    public Double margin;
    public ReportByDayByChannel withMargin(Double margin) {
        this.margin = margin;
        return this;
    }
    @JsonProperty("orderCount")
    public Long orderCount;
    public ReportByDayByChannel withOrderCount(Long orderCount) {
        this.orderCount = orderCount;
        return this;
    }
    @JsonProperty("performanceIndicator")
    public Double performanceIndicator;
    public ReportByDayByChannel withPerformanceIndicator(Double performanceIndicator) {
        this.performanceIndicator = performanceIndicator;
        return this;
    }
    @JsonProperty("roi")
    public Double roi;
    public ReportByDayByChannel withRoi(Double roi) {
        this.roi = roi;
        return this;
    }
    @JsonProperty("soldProductCount")
    public Long soldProductCount;
    public ReportByDayByChannel withSoldProductCount(Long soldProductCount) {
        this.soldProductCount = soldProductCount;
        return this;
    }
    @JsonProperty("totalSales")
    public Double totalSales;
    public ReportByDayByChannel withTotalSales(Double totalSales) {
        this.totalSales = totalSales;
        return this;
    }
}