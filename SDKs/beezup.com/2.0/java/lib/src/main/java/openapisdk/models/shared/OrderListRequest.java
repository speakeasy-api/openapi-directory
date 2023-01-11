package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class OrderListRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountIds")
    public Integer[] accountIds;
    public OrderListRequest withAccountIds(Integer[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beezUPOrderStatuses")
    public String[] beezUPOrderStatuses;
    public OrderListRequest withBeezUpOrderStatuses(String[] beezUPOrderStatuses) {
        this.beezUPOrderStatuses = beezUPOrderStatuses;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("beginPeriodUtcDate")
    public OffsetDateTime beginPeriodUtcDate;
    public OrderListRequest withBeginPeriodUtcDate(OffsetDateTime beginPeriodUtcDate) {
        this.beginPeriodUtcDate = beginPeriodUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateSearchType")
    public DateSearchTypeEnum dateSearchType;
    public OrderListRequest withDateSearchType(DateSearchTypeEnum dateSearchType) {
        this.dateSearchType = dateSearchType;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endPeriodUtcDate")
    public OffsetDateTime endPeriodUtcDate;
    public OrderListRequest withEndPeriodUtcDate(OffsetDateTime endPeriodUtcDate) {
        this.endPeriodUtcDate = endPeriodUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceAvailabilityType")
    public String invoiceAvailabilityType;
    public OrderListRequest withInvoiceAvailabilityType(String invoiceAvailabilityType) {
        this.invoiceAvailabilityType = invoiceAvailabilityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceBusinessCodes")
    public String[] marketplaceBusinessCodes;
    public OrderListRequest withMarketplaceBusinessCodes(String[] marketplaceBusinessCodes) {
        this.marketplaceBusinessCodes = marketplaceBusinessCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceOrderIds")
    public String[] marketplaceOrderIds;
    public OrderListRequest withMarketplaceOrderIds(String[] marketplaceOrderIds) {
        this.marketplaceOrderIds = marketplaceOrderIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceTechnicalCodes")
    public String[] marketplaceTechnicalCodes;
    public OrderListRequest withMarketplaceTechnicalCodes(String[] marketplaceTechnicalCodes) {
        this.marketplaceTechnicalCodes = marketplaceTechnicalCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderMerchantInfoSynchronizationStatus")
    public String orderMerchantInfoSynchronizationStatus;
    public OrderListRequest withOrderMerchantInfoSynchronizationStatus(String orderMerchantInfoSynchronizationStatus) {
        this.orderMerchantInfoSynchronizationStatus = orderMerchantInfoSynchronizationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_Buyer_Name")
    public String orderBuyerName;
    public OrderListRequest withOrderBuyerName(String orderBuyerName) {
        this.orderBuyerName = orderBuyerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_MerchantOrderIds")
    public String[] orderMerchantOrderIds;
    public OrderListRequest withOrderMerchantOrderIds(String[] orderMerchantOrderIds) {
        this.orderMerchantOrderIds = orderMerchantOrderIds;
        return this;
    }
    @JsonProperty("pageNumber")
    public Integer pageNumber;
    public OrderListRequest withPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonProperty("pageSize")
    public Integer pageSize;
    public OrderListRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeIds")
    public String[] storeIds;
    public OrderListRequest withStoreIds(String[] storeIds) {
        this.storeIds = storeIds;
        return this;
    }
}