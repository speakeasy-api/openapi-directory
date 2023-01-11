package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAttachInstancesActionEnum action;
    public PostAttachInstancesQueryParams withAction(PostAttachInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAttachInstancesVersionEnum version;
    public PostAttachInstancesQueryParams withVersion(PostAttachInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}