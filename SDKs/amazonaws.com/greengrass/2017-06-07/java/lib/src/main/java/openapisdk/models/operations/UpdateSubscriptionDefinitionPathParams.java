package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubscriptionDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubscriptionDefinitionId")
    public String subscriptionDefinitionId;
    public UpdateSubscriptionDefinitionPathParams withSubscriptionDefinitionId(String subscriptionDefinitionId) {
        this.subscriptionDefinitionId = subscriptionDefinitionId;
        return this;
    }
}