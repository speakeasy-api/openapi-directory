package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTrafficMirrorSessionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateTrafficMirrorSessionActionEnum action;
    public PostCreateTrafficMirrorSessionQueryParams withAction(PostCreateTrafficMirrorSessionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateTrafficMirrorSessionVersionEnum version;
    public PostCreateTrafficMirrorSessionQueryParams withVersion(PostCreateTrafficMirrorSessionVersionEnum version) {
        this.version = version;
        return this;
    }
}