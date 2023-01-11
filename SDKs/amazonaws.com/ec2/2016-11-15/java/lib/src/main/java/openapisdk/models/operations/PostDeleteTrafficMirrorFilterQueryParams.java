package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTrafficMirrorFilterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteTrafficMirrorFilterActionEnum action;
    public PostDeleteTrafficMirrorFilterQueryParams withAction(PostDeleteTrafficMirrorFilterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteTrafficMirrorFilterVersionEnum version;
    public PostDeleteTrafficMirrorFilterQueryParams withVersion(PostDeleteTrafficMirrorFilterVersionEnum version) {
        this.version = version;
        return this;
    }
}