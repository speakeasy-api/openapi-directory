package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutomotivePartsCompatibilityPoliciesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=marketplace_id")
    public String marketplaceId;
    public GetAutomotivePartsCompatibilityPoliciesPathParams withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
}