package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetMerchantOrderInfoListRequestItem {
    @JsonProperty("accountId")
    public Integer accountId;
    public SetMerchantOrderInfoListRequestItem withAccountId(Integer accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("beezUPOrderId")
    public String beezUPOrderId;
    public SetMerchantOrderInfoListRequestItem withBeezUpOrderId(String beezUPOrderId) {
        this.beezUPOrderId = beezUPOrderId;
        return this;
    }
    @JsonProperty("marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;
    public SetMerchantOrderInfoListRequestItem withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
    @JsonProperty("order_MerchantOrderId")
    public String orderMerchantOrderId;
    public SetMerchantOrderInfoListRequestItem withOrderMerchantOrderId(String orderMerchantOrderId) {
        this.orderMerchantOrderId = orderMerchantOrderId;
        return this;
    }
}