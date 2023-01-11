package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateApplicationVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateApplicationVersionActionEnum action;
    public PostUpdateApplicationVersionQueryParams withAction(PostUpdateApplicationVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateApplicationVersionVersionEnum version;
    public PostUpdateApplicationVersionQueryParams withVersion(PostUpdateApplicationVersionVersionEnum version) {
        this.version = version;
        return this;
    }
}