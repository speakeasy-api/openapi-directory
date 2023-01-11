package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateFleetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateFleetActionEnum action;
    public PostCreateFleetQueryParams withAction(PostCreateFleetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateFleetVersionEnum version;
    public PostCreateFleetQueryParams withVersion(PostCreateFleetVersionEnum version) {
        this.version = version;
        return this;
    }
}