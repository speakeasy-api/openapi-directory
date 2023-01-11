package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportByCategory {
    @JsonProperty("allProductCount")
    public Long allProductCount;
    public ReportByCategory withAllProductCount(Long allProductCount) {
        this.allProductCount = allProductCount;
        return this;
    }
    @JsonProperty("catalogCategoryId")
    public String catalogCategoryId;
    public ReportByCategory withCatalogCategoryId(String catalogCategoryId) {
        this.catalogCategoryId = catalogCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogCategoryPath")
    public String[] catalogCategoryPath;
    public ReportByCategory withCatalogCategoryPath(String[] catalogCategoryPath) {
        this.catalogCategoryPath = catalogCategoryPath;
        return this;
    }
    @JsonProperty("catalogProductCount")
    public Long catalogProductCount;
    public ReportByCategory withCatalogProductCount(Long catalogProductCount) {
        this.catalogProductCount = catalogProductCount;
        return this;
    }
    @JsonProperty("clickCount")
    public Long clickCount;
    public ReportByCategory withClickCount(Long clickCount) {
        this.clickCount = clickCount;
        return this;
    }
    @JsonProperty("cost")
    public Double cost;
    public ReportByCategory withCost(Double cost) {
        this.cost = cost;
        return this;
    }
    @JsonProperty("enabledProductCount")
    public Long enabledProductCount;
    public ReportByCategory withEnabledProductCount(Long enabledProductCount) {
        this.enabledProductCount = enabledProductCount;
        return this;
    }
    @JsonProperty("links")
    public ReportByCategoryLinks links;
    public ReportByCategory withLinks(ReportByCategoryLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("margin")
    public Double margin;
    public ReportByCategory withMargin(Double margin) {
        this.margin = margin;
        return this;
    }
    @JsonProperty("orderCount")
    public Long orderCount;
    public ReportByCategory withOrderCount(Long orderCount) {
        this.orderCount = orderCount;
        return this;
    }
    @JsonProperty("performanceIndicator")
    public Double performanceIndicator;
    public ReportByCategory withPerformanceIndicator(Double performanceIndicator) {
        this.performanceIndicator = performanceIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roi")
    public Double roi;
    public ReportByCategory withRoi(Double roi) {
        this.roi = roi;
        return this;
    }
    @JsonProperty("soldProductCount")
    public Long soldProductCount;
    public ReportByCategory withSoldProductCount(Long soldProductCount) {
        this.soldProductCount = soldProductCount;
        return this;
    }
    @JsonProperty("totalSales")
    public Double totalSales;
    public ReportByCategory withTotalSales(Double totalSales) {
        this.totalSales = totalSales;
        return this;
    }
}