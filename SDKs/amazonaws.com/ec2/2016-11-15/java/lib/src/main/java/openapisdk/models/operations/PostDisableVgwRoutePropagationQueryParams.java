package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableVgwRoutePropagationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisableVgwRoutePropagationActionEnum action;
    public PostDisableVgwRoutePropagationQueryParams withAction(PostDisableVgwRoutePropagationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisableVgwRoutePropagationVersionEnum version;
    public PostDisableVgwRoutePropagationQueryParams withVersion(PostDisableVgwRoutePropagationVersionEnum version) {
        this.version = version;
        return this;
    }
}