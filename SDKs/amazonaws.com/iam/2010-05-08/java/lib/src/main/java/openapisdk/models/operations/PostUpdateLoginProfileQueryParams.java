package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateLoginProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateLoginProfileActionEnum action;
    public PostUpdateLoginProfileQueryParams withAction(PostUpdateLoginProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateLoginProfileVersionEnum version;
    public PostUpdateLoginProfileQueryParams withVersion(PostUpdateLoginProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}