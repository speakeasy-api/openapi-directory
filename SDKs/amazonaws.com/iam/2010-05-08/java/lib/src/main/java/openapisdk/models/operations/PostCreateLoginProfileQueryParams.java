package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLoginProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateLoginProfileActionEnum action;
    public PostCreateLoginProfileQueryParams withAction(PostCreateLoginProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateLoginProfileVersionEnum version;
    public PostCreateLoginProfileQueryParams withVersion(PostCreateLoginProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}