package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetItemConditionPoliciesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=marketplace_id")
    public String marketplaceId;
    public GetItemConditionPoliciesPathParams withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
}