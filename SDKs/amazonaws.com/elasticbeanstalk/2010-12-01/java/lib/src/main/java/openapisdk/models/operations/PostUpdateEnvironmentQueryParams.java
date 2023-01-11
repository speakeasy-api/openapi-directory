package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateEnvironmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateEnvironmentActionEnum action;
    public PostUpdateEnvironmentQueryParams withAction(PostUpdateEnvironmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateEnvironmentVersionEnum version;
    public PostUpdateEnvironmentQueryParams withVersion(PostUpdateEnvironmentVersionEnum version) {
        this.version = version;
        return this;
    }
}