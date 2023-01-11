package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTrafficMirrorTargetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateTrafficMirrorTargetActionEnum action;
    public PostCreateTrafficMirrorTargetQueryParams withAction(PostCreateTrafficMirrorTargetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateTrafficMirrorTargetVersionEnum version;
    public PostCreateTrafficMirrorTargetQueryParams withVersion(PostCreateTrafficMirrorTargetVersionEnum version) {
        this.version = version;
        return this;
    }
}