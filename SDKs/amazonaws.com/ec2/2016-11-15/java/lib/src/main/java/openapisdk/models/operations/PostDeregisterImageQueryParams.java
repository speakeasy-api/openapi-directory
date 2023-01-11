package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeregisterImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeregisterImageActionEnum action;
    public PostDeregisterImageQueryParams withAction(PostDeregisterImageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeregisterImageVersionEnum version;
    public PostDeregisterImageQueryParams withVersion(PostDeregisterImageVersionEnum version) {
        this.version = version;
        return this;
    }
}