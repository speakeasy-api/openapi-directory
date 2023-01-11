package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateInstanceProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateInstanceProfileActionEnum action;
    public PostCreateInstanceProfileQueryParams withAction(PostCreateInstanceProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateInstanceProfileVersionEnum version;
    public PostCreateInstanceProfileQueryParams withVersion(PostCreateInstanceProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}