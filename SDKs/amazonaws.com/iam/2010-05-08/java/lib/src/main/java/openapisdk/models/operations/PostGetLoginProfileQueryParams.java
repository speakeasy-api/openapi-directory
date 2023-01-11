package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetLoginProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetLoginProfileActionEnum action;
    public PostGetLoginProfileQueryParams withAction(PostGetLoginProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetLoginProfileVersionEnum version;
    public PostGetLoginProfileQueryParams withVersion(PostGetLoginProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}