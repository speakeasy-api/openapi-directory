package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReturnPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marketplace_id")
    public String marketplaceId;
    public GetReturnPoliciesQueryParams withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
}