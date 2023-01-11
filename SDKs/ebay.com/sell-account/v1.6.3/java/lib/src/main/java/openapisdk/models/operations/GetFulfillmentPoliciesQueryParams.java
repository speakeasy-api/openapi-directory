package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFulfillmentPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marketplace_id")
    public String marketplaceId;
    public GetFulfillmentPoliciesQueryParams withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
}