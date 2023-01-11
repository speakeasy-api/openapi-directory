package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IndividualSubscriptionGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionId")
    public String subscriptionId;
    public IndividualSubscriptionGetPathParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
}