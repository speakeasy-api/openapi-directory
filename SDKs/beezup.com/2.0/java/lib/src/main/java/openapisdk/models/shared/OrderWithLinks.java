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
 * OrderWithLinks
 * Describe in details all informations related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails.
**/
public class OrderWithLinks {
    @JsonProperty("accountId")
    public Integer accountId;
    public OrderWithLinks withAccountId(Integer accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("beezUPOrderId")
    public String beezUPOrderId;
    public OrderWithLinks withBeezUpOrderId(String beezUPOrderId) {
        this.beezUPOrderId = beezUPOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beezUPOrderUrl")
    public String beezUPOrderUrl;
    public OrderWithLinks withBeezUpOrderUrl(String beezUPOrderUrl) {
        this.beezUPOrderUrl = beezUPOrderUrl;
        return this;
    }
    @JsonProperty("etag")
    public String etag;
    public OrderWithLinks withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonProperty("links")
    public OrderLinks links;
    public OrderWithLinks withLinks(OrderLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("marketplaceBusinessCode")
    public String marketplaceBusinessCode;
    public OrderWithLinks withMarketplaceBusinessCode(String marketplaceBusinessCode) {
        this.marketplaceBusinessCode = marketplaceBusinessCode;
        return this;
    }
    @JsonProperty("marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;
    public OrderWithLinks withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
    @JsonProperty("orderItems")
    public OrderItem[] orderItems;
    public OrderWithLinks withOrderItems(OrderItem[] orderItems) {
        this.orderItems = orderItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_AddressCity")
    public String orderBuyerAddressCity;
    public OrderWithLinks withOrderBuyerAddressCity(String orderBuyerAddressCity) {
        this.orderBuyerAddressCity = orderBuyerAddressCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_AddressCountryIsoCodeAlpha2")
    public String orderBuyerAddressCountryIsoCodeAlpha2;
    public OrderWithLinks withOrderBuyerAddressCountryIsoCodeAlpha2(String orderBuyerAddressCountryIsoCodeAlpha2) {
        this.orderBuyerAddressCountryIsoCodeAlpha2 = orderBuyerAddressCountryIsoCodeAlpha2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_AddressCountryName")
    public String orderBuyerAddressCountryName;
    public OrderWithLinks withOrderBuyerAddressCountryName(String orderBuyerAddressCountryName) {
        this.orderBuyerAddressCountryName = orderBuyerAddressCountryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_AddressLine1")
    public String orderBuyerAddressLine1;
    public OrderWithLinks withOrderBuyerAddressLine1(String orderBuyerAddressLine1) {
        this.orderBuyerAddressLine1 = orderBuyerAddressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_AddressLine2")
    public String orderBuyerAddressLine2;
    public OrderWithLinks withOrderBuyerAddressLine2(String orderBuyerAddressLine2) {
        this.orderBuyerAddressLine2 = orderBuyerAddressLine2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_AddressLine3")
    public String orderBuyerAddressLine3;
    public OrderWithLinks withOrderBuyerAddressLine3(String orderBuyerAddressLine3) {
        this.orderBuyerAddressLine3 = orderBuyerAddressLine3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_AddressPostalCode")
    public String orderBuyerAddressPostalCode;
    public OrderWithLinks withOrderBuyerAddressPostalCode(String orderBuyerAddressPostalCode) {
        this.orderBuyerAddressPostalCode = orderBuyerAddressPostalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_AddressStateOrRegion")
    public String orderBuyerAddressStateOrRegion;
    public OrderWithLinks withOrderBuyerAddressStateOrRegion(String orderBuyerAddressStateOrRegion) {
        this.orderBuyerAddressStateOrRegion = orderBuyerAddressStateOrRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_Civility")
    public String orderBuyerCivility;
    public OrderWithLinks withOrderBuyerCivility(String orderBuyerCivility) {
        this.orderBuyerCivility = orderBuyerCivility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_CompanyName")
    public String orderBuyerCompanyName;
    public OrderWithLinks withOrderBuyerCompanyName(String orderBuyerCompanyName) {
        this.orderBuyerCompanyName = orderBuyerCompanyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_Email")
    public String orderBuyerEmail;
    public OrderWithLinks withOrderBuyerEmail(String orderBuyerEmail) {
        this.orderBuyerEmail = orderBuyerEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_FirstName")
    public String orderBuyerFirstName;
    public OrderWithLinks withOrderBuyerFirstName(String orderBuyerFirstName) {
        this.orderBuyerFirstName = orderBuyerFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_Identifier")
    public String orderBuyerIdentifier;
    public OrderWithLinks withOrderBuyerIdentifier(String orderBuyerIdentifier) {
        this.orderBuyerIdentifier = orderBuyerIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_LastName")
    public String orderBuyerLastName;
    public OrderWithLinks withOrderBuyerLastName(String orderBuyerLastName) {
        this.orderBuyerLastName = orderBuyerLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_MobilePhone")
    public String orderBuyerMobilePhone;
    public OrderWithLinks withOrderBuyerMobilePhone(String orderBuyerMobilePhone) {
        this.orderBuyerMobilePhone = orderBuyerMobilePhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_Name")
    public String orderBuyerName;
    public OrderWithLinks withOrderBuyerName(String orderBuyerName) {
        this.orderBuyerName = orderBuyerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_Phone")
    public String orderBuyerPhone;
    public OrderWithLinks withOrderBuyerPhone(String orderBuyerPhone) {
        this.orderBuyerPhone = orderBuyerPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Comment")
    public String orderComment;
    public OrderWithLinks withOrderComment(String orderComment) {
        this.orderComment = orderComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_CurrencyCode")
    public String orderCurrencyCode;
    public OrderWithLinks withOrderCurrencyCode(String orderCurrencyCode) {
        this.orderCurrencyCode = orderCurrencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_FulfilledBy")
    public String orderFulfilledBy;
    public OrderWithLinks withOrderFulfilledBy(String orderFulfilledBy) {
        this.orderFulfilledBy = orderFulfilledBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Invoice_Number")
    public String orderInvoiceNumber;
    public OrderWithLinks withOrderInvoiceNumber(String orderInvoiceNumber) {
        this.orderInvoiceNumber = orderInvoiceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Invoice_Uri")
    public String orderInvoiceUri;
    public OrderWithLinks withOrderInvoiceUri(String orderInvoiceUri) {
        this.orderInvoiceUri = orderInvoiceUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_IsBusiness")
    public Boolean orderIsBusiness;
    public OrderWithLinks withOrderIsBusiness(Boolean orderIsBusiness) {
        this.orderIsBusiness = orderIsBusiness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_IsPrime")
    public Boolean orderIsPrime;
    public OrderWithLinks withOrderIsPrime(Boolean orderIsPrime) {
        this.orderIsPrime = orderIsPrime;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("order_LastModificationUtcDate")
    public OffsetDateTime orderLastModificationUtcDate;
    public OrderWithLinks withOrderLastModificationUtcDate(OffsetDateTime orderLastModificationUtcDate) {
        this.orderLastModificationUtcDate = orderLastModificationUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_MarketPlaceChannel")
    public String orderMarketPlaceChannel;
    public OrderWithLinks withOrderMarketPlaceChannel(String orderMarketPlaceChannel) {
        this.orderMarketPlaceChannel = orderMarketPlaceChannel;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("order_MarketplaceLastModificationUtcDate")
    public OffsetDateTime orderMarketplaceLastModificationUtcDate;
    public OrderWithLinks withOrderMarketplaceLastModificationUtcDate(OffsetDateTime orderMarketplaceLastModificationUtcDate) {
        this.orderMarketplaceLastModificationUtcDate = orderMarketplaceLastModificationUtcDate;
        return this;
    }
    @JsonProperty("order_MarketplaceOrderId")
    public String orderMarketplaceOrderId;
    public OrderWithLinks withOrderMarketplaceOrderId(String orderMarketplaceOrderId) {
        this.orderMarketplaceOrderId = orderMarketplaceOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_MerchantECommerceSoftwareName")
    public String orderMerchantECommerceSoftwareName;
    public OrderWithLinks withOrderMerchantECommerceSoftwareName(String orderMerchantECommerceSoftwareName) {
        this.orderMerchantECommerceSoftwareName = orderMerchantECommerceSoftwareName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_MerchantECommerceSoftwareVersion")
    public String orderMerchantECommerceSoftwareVersion;
    public OrderWithLinks withOrderMerchantECommerceSoftwareVersion(String orderMerchantECommerceSoftwareVersion) {
        this.orderMerchantECommerceSoftwareVersion = orderMerchantECommerceSoftwareVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_MerchantOrderId")
    public String orderMerchantOrderId;
    public OrderWithLinks withOrderMerchantOrderId(String orderMerchantOrderId) {
        this.orderMerchantOrderId = orderMerchantOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_OrderItemsSourceUri")
    public String orderOrderItemsSourceUri;
    public OrderWithLinks withOrderOrderItemsSourceUri(String orderOrderItemsSourceUri) {
        this.orderOrderItemsSourceUri = orderOrderItemsSourceUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_OrderSourceUri")
    public String orderOrderSourceUri;
    public OrderWithLinks withOrderOrderSourceUri(String orderOrderSourceUri) {
        this.orderOrderSourceUri = orderOrderSourceUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("order_PayingUtcDate")
    public OffsetDateTime orderPayingUtcDate;
    public OrderWithLinks withOrderPayingUtcDate(OffsetDateTime orderPayingUtcDate) {
        this.orderPayingUtcDate = orderPayingUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_PaymentMethod")
    public String orderPaymentMethod;
    public OrderWithLinks withOrderPaymentMethod(String orderPaymentMethod) {
        this.orderPaymentMethod = orderPaymentMethod;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("order_PurchaseUtcDate")
    public OffsetDateTime orderPurchaseUtcDate;
    public OrderWithLinks withOrderPurchaseUtcDate(OffsetDateTime orderPurchaseUtcDate) {
        this.orderPurchaseUtcDate = orderPurchaseUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_AddressCity")
    public String orderShippingAddressCity;
    public OrderWithLinks withOrderShippingAddressCity(String orderShippingAddressCity) {
        this.orderShippingAddressCity = orderShippingAddressCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_AddressCountryIsoCodeAlpha2")
    public String orderShippingAddressCountryIsoCodeAlpha2;
    public OrderWithLinks withOrderShippingAddressCountryIsoCodeAlpha2(String orderShippingAddressCountryIsoCodeAlpha2) {
        this.orderShippingAddressCountryIsoCodeAlpha2 = orderShippingAddressCountryIsoCodeAlpha2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_AddressCountryName")
    public String orderShippingAddressCountryName;
    public OrderWithLinks withOrderShippingAddressCountryName(String orderShippingAddressCountryName) {
        this.orderShippingAddressCountryName = orderShippingAddressCountryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_AddressLine1")
    public String orderShippingAddressLine1;
    public OrderWithLinks withOrderShippingAddressLine1(String orderShippingAddressLine1) {
        this.orderShippingAddressLine1 = orderShippingAddressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_AddressLine2")
    public String orderShippingAddressLine2;
    public OrderWithLinks withOrderShippingAddressLine2(String orderShippingAddressLine2) {
        this.orderShippingAddressLine2 = orderShippingAddressLine2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_AddressLine3")
    public String orderShippingAddressLine3;
    public OrderWithLinks withOrderShippingAddressLine3(String orderShippingAddressLine3) {
        this.orderShippingAddressLine3 = orderShippingAddressLine3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_AddressName")
    public String orderShippingAddressName;
    public OrderWithLinks withOrderShippingAddressName(String orderShippingAddressName) {
        this.orderShippingAddressName = orderShippingAddressName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_AddressPostalCode")
    public String orderShippingAddressPostalCode;
    public OrderWithLinks withOrderShippingAddressPostalCode(String orderShippingAddressPostalCode) {
        this.orderShippingAddressPostalCode = orderShippingAddressPostalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_AddressStateOrRegion")
    public String orderShippingAddressStateOrRegion;
    public OrderWithLinks withOrderShippingAddressStateOrRegion(String orderShippingAddressStateOrRegion) {
        this.orderShippingAddressStateOrRegion = orderShippingAddressStateOrRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_Civility")
    public String orderShippingCivility;
    public OrderWithLinks withOrderShippingCivility(String orderShippingCivility) {
        this.orderShippingCivility = orderShippingCivility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_CompanyName")
    public String orderShippingCompanyName;
    public OrderWithLinks withOrderShippingCompanyName(String orderShippingCompanyName) {
        this.orderShippingCompanyName = orderShippingCompanyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("order_Shipping_EarliestShipUtcDate")
    public OffsetDateTime orderShippingEarliestShipUtcDate;
    public OrderWithLinks withOrderShippingEarliestShipUtcDate(OffsetDateTime orderShippingEarliestShipUtcDate) {
        this.orderShippingEarliestShipUtcDate = orderShippingEarliestShipUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_Email")
    public String orderShippingEmail;
    public OrderWithLinks withOrderShippingEmail(String orderShippingEmail) {
        this.orderShippingEmail = orderShippingEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_FirstName")
    public String orderShippingFirstName;
    public OrderWithLinks withOrderShippingFirstName(String orderShippingFirstName) {
        this.orderShippingFirstName = orderShippingFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_LastName")
    public String orderShippingLastName;
    public OrderWithLinks withOrderShippingLastName(String orderShippingLastName) {
        this.orderShippingLastName = orderShippingLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("order_Shipping_LatestShipUtcDate")
    public OffsetDateTime orderShippingLatestShipUtcDate;
    public OrderWithLinks withOrderShippingLatestShipUtcDate(OffsetDateTime orderShippingLatestShipUtcDate) {
        this.orderShippingLatestShipUtcDate = orderShippingLatestShipUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_Method")
    public String orderShippingMethod;
    public OrderWithLinks withOrderShippingMethod(String orderShippingMethod) {
        this.orderShippingMethod = orderShippingMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_MobilePhone")
    public String orderShippingMobilePhone;
    public OrderWithLinks withOrderShippingMobilePhone(String orderShippingMobilePhone) {
        this.orderShippingMobilePhone = orderShippingMobilePhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_Phone")
    public String orderShippingPhone;
    public OrderWithLinks withOrderShippingPhone(String orderShippingPhone) {
        this.orderShippingPhone = orderShippingPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_Price")
    public Double orderShippingPrice;
    public OrderWithLinks withOrderShippingPrice(Double orderShippingPrice) {
        this.orderShippingPrice = orderShippingPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Shipping_ShippingTax")
    public Double orderShippingShippingTax;
    public OrderWithLinks withOrderShippingShippingTax(Double orderShippingShippingTax) {
        this.orderShippingShippingTax = orderShippingShippingTax;
        return this;
    }
    @JsonProperty("order_Status_BeezUPOrderStatus")
    public String orderStatusBeezUPOrderStatus;
    public OrderWithLinks withOrderStatusBeezUpOrderStatus(String orderStatusBeezUPOrderStatus) {
        this.orderStatusBeezUPOrderStatus = orderStatusBeezUPOrderStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Status_MarketplaceOrderStatus")
    public String orderStatusMarketplaceOrderStatus;
    public OrderWithLinks withOrderStatusMarketplaceOrderStatus(String orderStatusMarketplaceOrderStatus) {
        this.orderStatusMarketplaceOrderStatus = orderStatusMarketplaceOrderStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_TotalCommission")
    public Double orderTotalCommission;
    public OrderWithLinks withOrderTotalCommission(Double orderTotalCommission) {
        this.orderTotalCommission = orderTotalCommission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_TotalPrice")
    public Double orderTotalPrice;
    public OrderWithLinks withOrderTotalPrice(Double orderTotalPrice) {
        this.orderTotalPrice = orderTotalPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_TotalTax")
    public Double orderTotalTax;
    public OrderWithLinks withOrderTotalTax(Double orderTotalTax) {
        this.orderTotalTax = orderTotalTax;
        return this;
    }
    @JsonProperty("processing")
    public Boolean processing;
    public OrderWithLinks withProcessing(Boolean processing) {
        this.processing = processing;
        return this;
    }
    @JsonProperty("transitionLinks")
    public LinksChangeOrderLink[] transitionLinks;
    public OrderWithLinks withTransitionLinks(LinksChangeOrderLink[] transitionLinks) {
        this.transitionLinks = transitionLinks;
        return this;
    }
}