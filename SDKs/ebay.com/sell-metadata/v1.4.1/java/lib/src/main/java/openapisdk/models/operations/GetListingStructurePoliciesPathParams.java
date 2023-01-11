package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingStructurePoliciesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=marketplace_id")
    public String marketplaceId;
    public GetListingStructurePoliciesPathParams withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
}