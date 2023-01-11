package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteEventSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteEventSubscriptionActionEnum action;
    public GetDeleteEventSubscriptionQueryParams withAction(GetDeleteEventSubscriptionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SubscriptionName")
    public String subscriptionName;
    public GetDeleteEventSubscriptionQueryParams withSubscriptionName(String subscriptionName) {
        this.subscriptionName = subscriptionName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteEventSubscriptionVersionEnum version;
    public GetDeleteEventSubscriptionQueryParams withVersion(GetDeleteEventSubscriptionVersionEnum version) {
        this.version = version;
        return this;
    }
}