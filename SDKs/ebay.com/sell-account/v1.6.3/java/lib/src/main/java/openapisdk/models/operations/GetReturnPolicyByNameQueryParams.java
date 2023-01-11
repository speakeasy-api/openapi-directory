package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReturnPolicyByNameQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marketplace_id")
    public String marketplaceId;
    public GetReturnPolicyByNameQueryParams withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetReturnPolicyByNameQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}