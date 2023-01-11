package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSubscriptionDefinitionVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubscriptionDefinitionId")
    public String subscriptionDefinitionId;
    public ListSubscriptionDefinitionVersionsPathParams withSubscriptionDefinitionId(String subscriptionDefinitionId) {
        this.subscriptionDefinitionId = subscriptionDefinitionId;
        return this;
    }
}