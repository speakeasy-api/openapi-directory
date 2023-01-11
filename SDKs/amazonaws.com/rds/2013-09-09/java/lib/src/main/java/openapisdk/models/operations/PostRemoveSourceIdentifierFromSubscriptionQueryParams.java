package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveSourceIdentifierFromSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRemoveSourceIdentifierFromSubscriptionActionEnum action;
    public PostRemoveSourceIdentifierFromSubscriptionQueryParams withAction(PostRemoveSourceIdentifierFromSubscriptionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRemoveSourceIdentifierFromSubscriptionVersionEnum version;
    public PostRemoveSourceIdentifierFromSubscriptionQueryParams withVersion(PostRemoveSourceIdentifierFromSubscriptionVersionEnum version) {
        this.version = version;
        return this;
    }
}