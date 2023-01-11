package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResumeClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostResumeClusterActionEnum action;
    public PostResumeClusterQueryParams withAction(PostResumeClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostResumeClusterVersionEnum version;
    public PostResumeClusterQueryParams withVersion(PostResumeClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}