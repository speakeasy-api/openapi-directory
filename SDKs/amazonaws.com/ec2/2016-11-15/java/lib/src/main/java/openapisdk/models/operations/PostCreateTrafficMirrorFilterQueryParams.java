package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTrafficMirrorFilterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateTrafficMirrorFilterActionEnum action;
    public PostCreateTrafficMirrorFilterQueryParams withAction(PostCreateTrafficMirrorFilterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateTrafficMirrorFilterVersionEnum version;
    public PostCreateTrafficMirrorFilterQueryParams withVersion(PostCreateTrafficMirrorFilterVersionEnum version) {
        this.version = version;
        return this;
    }
}