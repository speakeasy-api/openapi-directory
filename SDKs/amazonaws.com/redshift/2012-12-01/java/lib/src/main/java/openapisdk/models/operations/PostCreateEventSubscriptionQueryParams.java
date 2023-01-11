package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateEventSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateEventSubscriptionActionEnum action;
    public PostCreateEventSubscriptionQueryParams withAction(PostCreateEventSubscriptionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateEventSubscriptionVersionEnum version;
    public PostCreateEventSubscriptionQueryParams withVersion(PostCreateEventSubscriptionVersionEnum version) {
        this.version = version;
        return this;
    }
}