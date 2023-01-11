package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyTrafficMirrorSessionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyTrafficMirrorSessionActionEnum action;
    public PostModifyTrafficMirrorSessionQueryParams withAction(PostModifyTrafficMirrorSessionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyTrafficMirrorSessionVersionEnum version;
    public PostModifyTrafficMirrorSessionQueryParams withVersion(PostModifyTrafficMirrorSessionVersionEnum version) {
        this.version = version;
        return this;
    }
}