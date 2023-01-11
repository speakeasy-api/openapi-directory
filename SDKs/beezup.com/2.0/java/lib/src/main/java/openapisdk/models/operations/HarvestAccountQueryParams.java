package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HarvestAccountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=beezUPOrderId")
    public String beezUPOrderId;
    public HarvestAccountQueryParams withBeezUpOrderId(String beezUPOrderId) {
        this.beezUPOrderId = beezUPOrderId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marketplaceOrderId")
    public String marketplaceOrderId;
    public HarvestAccountQueryParams withMarketplaceOrderId(String marketplaceOrderId) {
        this.marketplaceOrderId = marketplaceOrderId;
        return this;
    }
}