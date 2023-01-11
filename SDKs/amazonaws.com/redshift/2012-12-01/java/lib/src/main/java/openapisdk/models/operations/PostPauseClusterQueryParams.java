package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPauseClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPauseClusterActionEnum action;
    public PostPauseClusterQueryParams withAction(PostPauseClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPauseClusterVersionEnum version;
    public PostPauseClusterQueryParams withVersion(PostPauseClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}