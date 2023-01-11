package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableVgwRoutePropagationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnableVgwRoutePropagationActionEnum action;
    public PostEnableVgwRoutePropagationQueryParams withAction(PostEnableVgwRoutePropagationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnableVgwRoutePropagationVersionEnum version;
    public PostEnableVgwRoutePropagationQueryParams withVersion(PostEnableVgwRoutePropagationVersionEnum version) {
        this.version = version;
        return this;
    }
}