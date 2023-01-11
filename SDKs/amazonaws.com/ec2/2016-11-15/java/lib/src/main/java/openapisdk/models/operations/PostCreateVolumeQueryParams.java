package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVolumeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateVolumeActionEnum action;
    public PostCreateVolumeQueryParams withAction(PostCreateVolumeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateVolumeVersionEnum version;
    public PostCreateVolumeQueryParams withVersion(PostCreateVolumeVersionEnum version) {
        this.version = version;
        return this;
    }
}