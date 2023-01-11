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
 * OrderHeader
 * Describe the basic information related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails
**/
public class OrderHeader {
    @JsonProperty("accountId")
    public Integer accountId;
    public OrderHeader withAccountId(Integer accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("beezUPOrderId")
    public String beezUPOrderId;
    public OrderHeader withBeezUpOrderId(String beezUPOrderId) {
        this.beezUPOrderId = beezUPOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beezUPOrderUrl")
    public String beezUPOrderUrl;
    public OrderHeader withBeezUpOrderUrl(String beezUPOrderUrl) {
        this.beezUPOrderUrl = beezUPOrderUrl;
        return this;
    }
    @JsonProperty("etag")
    public String etag;
    public OrderHeader withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonProperty("links")
    public OrderHeaderLinks links;
    public OrderHeader withLinks(OrderHeaderLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("marketplaceBusinessCode")
    public String marketplaceBusinessCode;
    public OrderHeader withMarketplaceBusinessCode(String marketplaceBusinessCode) {
        this.marketplaceBusinessCode = marketplaceBusinessCode;
        return this;
    }
    @JsonProperty("marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;
    public OrderHeader withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_Name")
    public String orderBuyerName;
    public OrderHeader withOrderBuyerName(String orderBuyerName) {
        this.orderBuyerName = orderBuyerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_CurrencyCode")
    public String orderCurrencyCode;
    public OrderHeader withOrderCurrencyCode(String orderCurrencyCode) {
        this.orderCurrencyCode = orderCurrencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Invoice_Number")
    public String orderInvoiceNumber;
    public OrderHeader withOrderInvoiceNumber(String orderInvoiceNumber) {
        this.orderInvoiceNumber = orderInvoiceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Invoice_Uri")
    public String orderInvoiceUri;
    public OrderHeader withOrderInvoiceUri(String orderInvoiceUri) {
        this.orderInvoiceUri = orderInvoiceUri;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("order_LastModificationUtcDate")
    public OffsetDateTime orderLastModificationUtcDate;
    public OrderHeader withOrderLastModificationUtcDate(OffsetDateTime orderLastModificationUtcDate) {
        this.orderLastModificationUtcDate = orderLastModificationUtcDate;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("order_MarketplaceLastModificationUtcDate")
    public OffsetDateTime orderMarketplaceLastModificationUtcDate;
    public OrderHeader withOrderMarketplaceLastModificationUtcDate(OffsetDateTime orderMarketplaceLastModificationUtcDate) {
        this.orderMarketplaceLastModificationUtcDate = orderMarketplaceLastModificationUtcDate;
        return this;
    }
    @JsonProperty("order_MarketplaceOrderId")
    public String orderMarketplaceOrderId;
    public OrderHeader withOrderMarketplaceOrderId(String orderMarketplaceOrderId) {
        this.orderMarketplaceOrderId = orderMarketplaceOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_MerchantECommerceSoftwareName")
    public String orderMerchantECommerceSoftwareName;
    public OrderHeader withOrderMerchantECommerceSoftwareName(String orderMerchantECommerceSoftwareName) {
        this.orderMerchantECommerceSoftwareName = orderMerchantECommerceSoftwareName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_MerchantECommerceSoftwareVersion")
    public String orderMerchantECommerceSoftwareVersion;
    public OrderHeader withOrderMerchantECommerceSoftwareVersion(String orderMerchantECommerceSoftwareVersion) {
        this.orderMerchantECommerceSoftwareVersion = orderMerchantECommerceSoftwareVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_MerchantOrderId")
    public String orderMerchantOrderId;
    public OrderHeader withOrderMerchantOrderId(String orderMerchantOrderId) {
        this.orderMerchantOrderId = orderMerchantOrderId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("order_PurchaseUtcDate")
    public OffsetDateTime orderPurchaseUtcDate;
    public OrderHeader withOrderPurchaseUtcDate(OffsetDateTime orderPurchaseUtcDate) {
        this.orderPurchaseUtcDate = orderPurchaseUtcDate;
        return this;
    }
    @JsonProperty("order_Status_BeezUPOrderStatus")
    public String orderStatusBeezUPOrderStatus;
    public OrderHeader withOrderStatusBeezUpOrderStatus(String orderStatusBeezUPOrderStatus) {
        this.orderStatusBeezUPOrderStatus = orderStatusBeezUPOrderStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Status_MarketplaceOrderStatus")
    public String orderStatusMarketplaceOrderStatus;
    public OrderHeader withOrderStatusMarketplaceOrderStatus(String orderStatusMarketplaceOrderStatus) {
        this.orderStatusMarketplaceOrderStatus = orderStatusMarketplaceOrderStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_TotalPrice")
    public Double orderTotalPrice;
    public OrderHeader withOrderTotalPrice(Double orderTotalPrice) {
        this.orderTotalPrice = orderTotalPrice;
        return this;
    }
    @JsonProperty("processing")
    public Boolean processing;
    public OrderHeader withProcessing(Boolean processing) {
        this.processing = processing;
        return this;
    }
}