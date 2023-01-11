package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateImageActionEnum action;
    public PostCreateImageQueryParams withAction(PostCreateImageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateImageVersionEnum version;
    public PostCreateImageQueryParams withVersion(PostCreateImageVersionEnum version) {
        this.version = version;
        return this;
    }
}