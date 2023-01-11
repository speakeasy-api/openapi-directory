package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddSourceIdentifierToSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAddSourceIdentifierToSubscriptionActionEnum action;
    public PostAddSourceIdentifierToSubscriptionQueryParams withAction(PostAddSourceIdentifierToSubscriptionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAddSourceIdentifierToSubscriptionVersionEnum version;
    public PostAddSourceIdentifierToSubscriptionQueryParams withVersion(PostAddSourceIdentifierToSubscriptionVersionEnum version) {
        this.version = version;
        return this;
    }
}