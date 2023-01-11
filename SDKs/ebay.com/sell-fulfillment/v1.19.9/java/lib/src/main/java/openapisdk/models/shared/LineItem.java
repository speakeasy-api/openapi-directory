package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineItem
 * This type contains the details of each line item in an order.
**/
public class LineItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedPromotions")
    public AppliedPromotion[] appliedPromotions;
    public LineItem withAppliedPromotions(AppliedPromotion[] appliedPromotions) {
        this.appliedPromotions = appliedPromotions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryCost")
    public DeliveryCost deliveryCost;
    public LineItem withDeliveryCost(DeliveryCost deliveryCost) {
        this.deliveryCost = deliveryCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountedLineItemCost")
    public Amount discountedLineItemCost;
    public LineItem withDiscountedLineItemCost(Amount discountedLineItemCost) {
        this.discountedLineItemCost = discountedLineItemCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ebayCollectAndRemitTaxes")
    public EbayCollectAndRemitTax[] ebayCollectAndRemitTaxes;
    public LineItem withEbayCollectAndRemitTaxes(EbayCollectAndRemitTax[] ebayCollectAndRemitTaxes) {
        this.ebayCollectAndRemitTaxes = ebayCollectAndRemitTaxes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("giftDetails")
    public GiftDetails giftDetails;
    public LineItem withGiftDetails(GiftDetails giftDetails) {
        this.giftDetails = giftDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemLocation")
    public ItemLocation itemLocation;
    public LineItem withItemLocation(ItemLocation itemLocation) {
        this.itemLocation = itemLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyItemId")
    public String legacyItemId;
    public LineItem withLegacyItemId(String legacyItemId) {
        this.legacyItemId = legacyItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyVariationId")
    public String legacyVariationId;
    public LineItem withLegacyVariationId(String legacyVariationId) {
        this.legacyVariationId = legacyVariationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemCost")
    public Amount lineItemCost;
    public LineItem withLineItemCost(Amount lineItemCost) {
        this.lineItemCost = lineItemCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemFulfillmentInstructions")
    public LineItemFulfillmentInstructions lineItemFulfillmentInstructions;
    public LineItem withLineItemFulfillmentInstructions(LineItemFulfillmentInstructions lineItemFulfillmentInstructions) {
        this.lineItemFulfillmentInstructions = lineItemFulfillmentInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemFulfillmentStatus")
    public String lineItemFulfillmentStatus;
    public LineItem withLineItemFulfillmentStatus(String lineItemFulfillmentStatus) {
        this.lineItemFulfillmentStatus = lineItemFulfillmentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemId")
    public String lineItemId;
    public LineItem withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingMarketplaceId")
    public String listingMarketplaceId;
    public LineItem withListingMarketplaceId(String listingMarketplaceId) {
        this.listingMarketplaceId = listingMarketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public LineItemProperties properties;
    public LineItem withProperties(LineItemProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseMarketplaceId")
    public String purchaseMarketplaceId;
    public LineItem withPurchaseMarketplaceId(String purchaseMarketplaceId) {
        this.purchaseMarketplaceId = purchaseMarketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Integer quantity;
    public LineItem withQuantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refunds")
    public LineItemRefund[] refunds;
    public LineItem withRefunds(LineItemRefund[] refunds) {
        this.refunds = refunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public LineItem withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soldFormat")
    public String soldFormat;
    public LineItem withSoldFormat(String soldFormat) {
        this.soldFormat = soldFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxes")
    public Tax[] taxes;
    public LineItem withTaxes(Tax[] taxes) {
        this.taxes = taxes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public LineItem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Amount total;
    public LineItem withTotal(Amount total) {
        this.total = total;
        return this;
    }
}