package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubscriptionDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubscriptionDefinitionId")
    public String subscriptionDefinitionId;
    public GetSubscriptionDefinitionPathParams withSubscriptionDefinitionId(String subscriptionDefinitionId) {
        this.subscriptionDefinitionId = subscriptionDefinitionId;
        return this;
    }
}