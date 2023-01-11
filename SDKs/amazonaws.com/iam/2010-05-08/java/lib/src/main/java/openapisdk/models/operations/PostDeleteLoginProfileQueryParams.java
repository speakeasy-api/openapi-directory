package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLoginProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteLoginProfileActionEnum action;
    public PostDeleteLoginProfileQueryParams withAction(PostDeleteLoginProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteLoginProfileVersionEnum version;
    public PostDeleteLoginProfileQueryParams withVersion(PostDeleteLoginProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}