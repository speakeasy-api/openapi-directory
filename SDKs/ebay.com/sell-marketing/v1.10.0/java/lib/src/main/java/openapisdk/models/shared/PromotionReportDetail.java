package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PromotionReportDetail
 * This type defines the fields in a promotion-level report.
**/
public class PromotionReportDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averageItemDiscount")
    public Amount averageItemDiscount;
    public PromotionReportDetail withAverageItemDiscount(Amount averageItemDiscount) {
        this.averageItemDiscount = averageItemDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averageItemRevenue")
    public Amount averageItemRevenue;
    public PromotionReportDetail withAverageItemRevenue(Amount averageItemRevenue) {
        this.averageItemRevenue = averageItemRevenue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averageOrderDiscount")
    public Amount averageOrderDiscount;
    public PromotionReportDetail withAverageOrderDiscount(Amount averageOrderDiscount) {
        this.averageOrderDiscount = averageOrderDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averageOrderRevenue")
    public Amount averageOrderRevenue;
    public PromotionReportDetail withAverageOrderRevenue(Amount averageOrderRevenue) {
        this.averageOrderRevenue = averageOrderRevenue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averageOrderSize")
    public String averageOrderSize;
    public PromotionReportDetail withAverageOrderSize(String averageOrderSize) {
        this.averageOrderSize = averageOrderSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseSale")
    public Amount baseSale;
    public PromotionReportDetail withBaseSale(Amount baseSale) {
        this.baseSale = baseSale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemsSoldQuantity")
    public Integer itemsSoldQuantity;
    public PromotionReportDetail withItemsSoldQuantity(Integer itemsSoldQuantity) {
        this.itemsSoldQuantity = itemsSoldQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfOrdersSold")
    public Integer numberOfOrdersSold;
    public PromotionReportDetail withNumberOfOrdersSold(Integer numberOfOrdersSold) {
        this.numberOfOrdersSold = numberOfOrdersSold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentageSalesLift")
    public String percentageSalesLift;
    public PromotionReportDetail withPercentageSalesLift(String percentageSalesLift) {
        this.percentageSalesLift = percentageSalesLift;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionHref")
    public String promotionHref;
    public PromotionReportDetail withPromotionHref(String promotionHref) {
        this.promotionHref = promotionHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionId")
    public String promotionId;
    public PromotionReportDetail withPromotionId(String promotionId) {
        this.promotionId = promotionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionReportId")
    public String promotionReportId;
    public PromotionReportDetail withPromotionReportId(String promotionReportId) {
        this.promotionReportId = promotionReportId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionSale")
    public Amount promotionSale;
    public PromotionReportDetail withPromotionSale(Amount promotionSale) {
        this.promotionSale = promotionSale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionType")
    public String promotionType;
    public PromotionReportDetail withPromotionType(String promotionType) {
        this.promotionType = promotionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDiscount")
    public Amount totalDiscount;
    public PromotionReportDetail withTotalDiscount(Amount totalDiscount) {
        this.totalDiscount = totalDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSale")
    public Amount totalSale;
    public PromotionReportDetail withTotalSale(Amount totalSale) {
        this.totalSale = totalSale;
        return this;
    }
}