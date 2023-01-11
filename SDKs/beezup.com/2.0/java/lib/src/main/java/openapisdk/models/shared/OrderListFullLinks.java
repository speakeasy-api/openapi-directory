package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OrderListFullLinks
 * The list of actions you can do from the order list response
**/
public class OrderListFullLinks {
    @JsonProperty("clearMerchantInfos")
    public LinksClearMerchantOrderInfoListLink clearMerchantInfos;
    public OrderListFullLinks withClearMerchantInfos(LinksClearMerchantOrderInfoListLink clearMerchantInfos) {
        this.clearMerchantInfos = clearMerchantInfos;
        return this;
    }
    @JsonProperty("export")
    public LinksExportOrdersLink export;
    public OrderListFullLinks withExport(LinksExportOrdersLink export) {
        this.export = export;
        return this;
    }
    @JsonProperty("harvest")
    public LinksHarvestAllLink harvest;
    public OrderListFullLinks withHarvest(LinksHarvestAllLink harvest) {
        this.harvest = harvest;
        return this;
    }
    @JsonProperty("self")
    public LinksGetOrderListFullLink self;
    public OrderListFullLinks withSelf(LinksGetOrderListFullLink self) {
        this.self = self;
        return this;
    }
    @JsonProperty("setMerchantInfos")
    public LinksSetMerchantOrderInfoListLink setMerchantInfos;
    public OrderListFullLinks withSetMerchantInfos(LinksSetMerchantOrderInfoListLink setMerchantInfos) {
        this.setMerchantInfos = setMerchantInfos;
        return this;
    }
    @JsonProperty("status")
    public LinksGetMarketplaceAccountsSynchronizationLink status;
    public OrderListFullLinks withStatus(LinksGetMarketplaceAccountsSynchronizationLink status) {
        this.status = status;
        return this;
    }
}