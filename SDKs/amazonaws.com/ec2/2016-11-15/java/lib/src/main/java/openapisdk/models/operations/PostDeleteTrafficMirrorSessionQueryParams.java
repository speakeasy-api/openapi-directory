package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTrafficMirrorSessionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteTrafficMirrorSessionActionEnum action;
    public PostDeleteTrafficMirrorSessionQueryParams withAction(PostDeleteTrafficMirrorSessionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteTrafficMirrorSessionVersionEnum version;
    public PostDeleteTrafficMirrorSessionQueryParams withVersion(PostDeleteTrafficMirrorSessionVersionEnum version) {
        this.version = version;
        return this;
    }
}