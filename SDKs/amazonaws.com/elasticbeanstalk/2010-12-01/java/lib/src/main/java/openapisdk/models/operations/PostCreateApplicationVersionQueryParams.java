package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateApplicationVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateApplicationVersionActionEnum action;
    public PostCreateApplicationVersionQueryParams withAction(PostCreateApplicationVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateApplicationVersionVersionEnum version;
    public PostCreateApplicationVersionQueryParams withVersion(PostCreateApplicationVersionVersionEnum version) {
        this.version = version;
        return this;
    }
}