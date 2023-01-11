package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteApplicationVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteApplicationVersionActionEnum action;
    public PostDeleteApplicationVersionQueryParams withAction(PostDeleteApplicationVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteApplicationVersionVersionEnum version;
    public PostDeleteApplicationVersionQueryParams withVersion(PostDeleteApplicationVersionVersionEnum version) {
        this.version = version;
        return this;
    }
}