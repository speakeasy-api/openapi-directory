package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrderLinks {
    @JsonProperty("clearMerchantInfo")
    public LinksClearMerchantOrderInfoLink clearMerchantInfo;
    public OrderLinks withClearMerchantInfo(LinksClearMerchantOrderInfoLink clearMerchantInfo) {
        this.clearMerchantInfo = clearMerchantInfo;
        return this;
    }
    @JsonProperty("harvest")
    public LinksHarvestOrderLink harvest;
    public OrderLinks withHarvest(LinksHarvestOrderLink harvest) {
        this.harvest = harvest;
        return this;
    }
    @JsonProperty("history")
    public LinksGetOrderHistoryLink history;
    public OrderLinks withHistory(LinksGetOrderHistoryLink history) {
        this.history = history;
        return this;
    }
    @JsonProperty("self")
    public LinksGetOrderLink self;
    public OrderLinks withSelf(LinksGetOrderLink self) {
        this.self = self;
        return this;
    }
    @JsonProperty("setMerchantInfo")
    public LinksSetMerchantOrderInfoLink setMerchantInfo;
    public OrderLinks withSetMerchantInfo(LinksSetMerchantOrderInfoLink setMerchantInfo) {
        this.setMerchantInfo = setMerchantInfo;
        return this;
    }
}