package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBuildSuggestersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostBuildSuggestersActionEnum action;
    public PostBuildSuggestersQueryParams withAction(PostBuildSuggestersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostBuildSuggestersVersionEnum version;
    public PostBuildSuggestersQueryParams withVersion(PostBuildSuggestersVersionEnum version) {
        this.version = version;
        return this;
    }
}