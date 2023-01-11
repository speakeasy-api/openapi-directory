package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyEventSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyEventSubscriptionActionEnum action;
    public PostModifyEventSubscriptionQueryParams withAction(PostModifyEventSubscriptionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyEventSubscriptionVersionEnum version;
    public PostModifyEventSubscriptionQueryParams withVersion(PostModifyEventSubscriptionVersionEnum version) {
        this.version = version;
        return this;
    }
}