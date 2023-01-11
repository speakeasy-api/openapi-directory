package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubscriptionDefinitionVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubscriptionDefinitionId")
    public String subscriptionDefinitionId;
    public GetSubscriptionDefinitionVersionPathParams withSubscriptionDefinitionId(String subscriptionDefinitionId) {
        this.subscriptionDefinitionId = subscriptionDefinitionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubscriptionDefinitionVersionId")
    public String subscriptionDefinitionVersionId;
    public GetSubscriptionDefinitionVersionPathParams withSubscriptionDefinitionVersionId(String subscriptionDefinitionVersionId) {
        this.subscriptionDefinitionVersionId = subscriptionDefinitionVersionId;
        return this;
    }
}