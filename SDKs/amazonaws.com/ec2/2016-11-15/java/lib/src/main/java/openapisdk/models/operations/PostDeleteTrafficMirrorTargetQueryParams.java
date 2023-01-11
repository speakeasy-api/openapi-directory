package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTrafficMirrorTargetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteTrafficMirrorTargetActionEnum action;
    public PostDeleteTrafficMirrorTargetQueryParams withAction(PostDeleteTrafficMirrorTargetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteTrafficMirrorTargetVersionEnum version;
    public PostDeleteTrafficMirrorTargetQueryParams withVersion(PostDeleteTrafficMirrorTargetVersionEnum version) {
        this.version = version;
        return this;
    }
}