package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateEnvironmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateEnvironmentActionEnum action;
    public PostCreateEnvironmentQueryParams withAction(PostCreateEnvironmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateEnvironmentVersionEnum version;
    public PostCreateEnvironmentQueryParams withVersion(PostCreateEnvironmentVersionEnum version) {
        this.version = version;
        return this;
    }
}