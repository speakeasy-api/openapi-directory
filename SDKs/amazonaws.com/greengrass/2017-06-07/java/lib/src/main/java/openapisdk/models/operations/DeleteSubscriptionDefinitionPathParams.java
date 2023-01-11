package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSubscriptionDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubscriptionDefinitionId")
    public String subscriptionDefinitionId;
    public DeleteSubscriptionDefinitionPathParams withSubscriptionDefinitionId(String subscriptionDefinitionId) {
        this.subscriptionDefinitionId = subscriptionDefinitionId;
        return this;
    }
}