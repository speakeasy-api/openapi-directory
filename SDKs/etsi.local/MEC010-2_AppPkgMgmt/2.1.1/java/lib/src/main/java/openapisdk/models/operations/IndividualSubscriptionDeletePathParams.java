package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IndividualSubscriptionDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionId")
    public String subscriptionId;
    public IndividualSubscriptionDeletePathParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
}