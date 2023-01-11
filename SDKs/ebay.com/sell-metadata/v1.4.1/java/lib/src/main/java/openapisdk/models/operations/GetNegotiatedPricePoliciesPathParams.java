package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNegotiatedPricePoliciesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=marketplace_id")
    public String marketplaceId;
    public GetNegotiatedPricePoliciesPathParams withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
}