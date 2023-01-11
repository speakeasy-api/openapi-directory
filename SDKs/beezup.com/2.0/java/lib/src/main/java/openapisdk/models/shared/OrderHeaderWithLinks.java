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
 * OrderHeaderWithLinks
 * Describe the basic information related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails
**/
public class OrderHeaderWithLinks {
    @JsonProperty("accountId")
    public Integer accountId;
    public OrderHeaderWithLinks withAccountId(Integer accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("beezUPOrderId")
    public String beezUPOrderId;
    public OrderHeaderWithLinks withBeezUpOrderId(String beezUPOrderId) {
        this.beezUPOrderId = beezUPOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beezUPOrderUrl")
    public String beezUPOrderUrl;
    public OrderHeaderWithLinks withBeezUpOrderUrl(String beezUPOrderUrl) {
        this.beezUPOrderUrl = beezUPOrderUrl;
        return this;
    }
    @JsonProperty("etag")
    public String etag;
    public OrderHeaderWithLinks withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonProperty("links")
    public OrderHeaderLinks links;
    public OrderHeaderWithLinks withLinks(OrderHeaderLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("marketplaceBusinessCode")
    public String marketplaceBusinessCode;
    public OrderHeaderWithLinks withMarketplaceBusinessCode(String marketplaceBusinessCode) {
        this.marketplaceBusinessCode = marketplaceBusinessCode;
        return this;
    }
    @JsonProperty("marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;
    public OrderHeaderWithLinks withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_Name")
    public String orderBuyerName;
    public OrderHeaderWithLinks withOrderBuyerName(String orderBuyerName) {
        this.orderBuyerName = orderBuyerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_CurrencyCode")
    public String orderCurrencyCode;
    public OrderHeaderWithLinks withOrderCurrencyCode(String orderCurrencyCode) {
        this.orderCurrencyCode = orderCurrencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Invoice_Number")
    public String orderInvoiceNumber;
    public OrderHeaderWithLinks withOrderInvoiceNumber(String orderInvoiceNumber) {
        this.orderInvoiceNumber = orderInvoiceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Invoice_Uri")
    public String orderInvoiceUri;
    public OrderHeaderWithLinks withOrderInvoiceUri(String orderInvoiceUri) {
        this.orderInvoiceUri = orderInvoiceUri;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("order_LastModificationUtcDate")
    public OffsetDateTime orderLastModificationUtcDate;
    public OrderHeaderWithLinks withOrderLastModificationUtcDate(OffsetDateTime orderLastModificationUtcDate) {
        this.orderLastModificationUtcDate = orderLastModificationUtcDate;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("order_MarketplaceLastModificationUtcDate")
    public OffsetDateTime orderMarketplaceLastModificationUtcDate;
    public OrderHeaderWithLinks withOrderMarketplaceLastModificationUtcDate(OffsetDateTime orderMarketplaceLastModificationUtcDate) {
        this.orderMarketplaceLastModificationUtcDate = orderMarketplaceLastModificationUtcDate;
        return this;
    }
    @JsonProperty("order_MarketplaceOrderId")
    public String orderMarketplaceOrderId;
    public OrderHeaderWithLinks withOrderMarketplaceOrderId(String orderMarketplaceOrderId) {
        this.orderMarketplaceOrderId = orderMarketplaceOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_MerchantECommerceSoftwareName")
    public String orderMerchantECommerceSoftwareName;
    public OrderHeaderWithLinks withOrderMerchantECommerceSoftwareName(String orderMerchantECommerceSoftwareName) {
        this.orderMerchantECommerceSoftwareName = orderMerchantECommerceSoftwareName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_MerchantECommerceSoftwareVersion")
    public String orderMerchantECommerceSoftwareVersion;
    public OrderHeaderWithLinks withOrderMerchantECommerceSoftwareVersion(String orderMerchantECommerceSoftwareVersion) {
        this.orderMerchantECommerceSoftwareVersion = orderMerchantECommerceSoftwareVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_MerchantOrderId")
    public String orderMerchantOrderId;
    public OrderHeaderWithLinks withOrderMerchantOrderId(String orderMerchantOrderId) {
        this.orderMerchantOrderId = orderMerchantOrderId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("order_PurchaseUtcDate")
    public OffsetDateTime orderPurchaseUtcDate;
    public OrderHeaderWithLinks withOrderPurchaseUtcDate(OffsetDateTime orderPurchaseUtcDate) {
        this.orderPurchaseUtcDate = orderPurchaseUtcDate;
        return this;
    }
    @JsonProperty("order_Status_BeezUPOrderStatus")
    public String orderStatusBeezUPOrderStatus;
    public OrderHeaderWithLinks withOrderStatusBeezUpOrderStatus(String orderStatusBeezUPOrderStatus) {
        this.orderStatusBeezUPOrderStatus = orderStatusBeezUPOrderStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Status_MarketplaceOrderStatus")
    public String orderStatusMarketplaceOrderStatus;
    public OrderHeaderWithLinks withOrderStatusMarketplaceOrderStatus(String orderStatusMarketplaceOrderStatus) {
        this.orderStatusMarketplaceOrderStatus = orderStatusMarketplaceOrderStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_TotalPrice")
    public Double orderTotalPrice;
    public OrderHeaderWithLinks withOrderTotalPrice(Double orderTotalPrice) {
        this.orderTotalPrice = orderTotalPrice;
        return this;
    }
    @JsonProperty("processing")
    public Boolean processing;
    public OrderHeaderWithLinks withProcessing(Boolean processing) {
        this.processing = processing;
        return this;
    }
}