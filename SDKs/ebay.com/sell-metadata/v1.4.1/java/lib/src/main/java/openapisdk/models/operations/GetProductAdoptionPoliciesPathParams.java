package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProductAdoptionPoliciesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=marketplace_id")
    public String marketplaceId;
    public GetProductAdoptionPoliciesPathParams withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
}