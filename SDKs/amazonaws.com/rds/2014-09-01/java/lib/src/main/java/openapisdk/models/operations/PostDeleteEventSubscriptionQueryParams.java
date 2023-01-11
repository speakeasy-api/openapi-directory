package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteEventSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteEventSubscriptionActionEnum action;
    public PostDeleteEventSubscriptionQueryParams withAction(PostDeleteEventSubscriptionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteEventSubscriptionVersionEnum version;
    public PostDeleteEventSubscriptionQueryParams withVersion(PostDeleteEventSubscriptionVersionEnum version) {
        this.version = version;
        return this;
    }
}