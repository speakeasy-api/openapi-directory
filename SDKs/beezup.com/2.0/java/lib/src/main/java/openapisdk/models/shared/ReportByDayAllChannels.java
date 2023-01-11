package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReportByDayAllChannels {
    @JsonProperty("clickCount")
    public Long clickCount;
    public ReportByDayAllChannels withClickCount(Long clickCount) {
        this.clickCount = clickCount;
        return this;
    }
    @JsonProperty("cost")
    public Double cost;
    public ReportByDayAllChannels withCost(Double cost) {
        this.cost = cost;
        return this;
    }
    @JsonProperty("margin")
    public Double margin;
    public ReportByDayAllChannels withMargin(Double margin) {
        this.margin = margin;
        return this;
    }
    @JsonProperty("orderCount")
    public Long orderCount;
    public ReportByDayAllChannels withOrderCount(Long orderCount) {
        this.orderCount = orderCount;
        return this;
    }
    @JsonProperty("performanceIndicator")
    public Double performanceIndicator;
    public ReportByDayAllChannels withPerformanceIndicator(Double performanceIndicator) {
        this.performanceIndicator = performanceIndicator;
        return this;
    }
    @JsonProperty("roi")
    public Double roi;
    public ReportByDayAllChannels withRoi(Double roi) {
        this.roi = roi;
        return this;
    }
    @JsonProperty("soldProductCount")
    public Long soldProductCount;
    public ReportByDayAllChannels withSoldProductCount(Long soldProductCount) {
        this.soldProductCount = soldProductCount;
        return this;
    }
    @JsonProperty("totalSales")
    public Double totalSales;
    public ReportByDayAllChannels withTotalSales(Double totalSales) {
        this.totalSales = totalSales;
        return this;
    }
}