package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVolumeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteVolumeActionEnum action;
    public PostDeleteVolumeQueryParams withAction(PostDeleteVolumeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteVolumeVersionEnum version;
    public PostDeleteVolumeQueryParams withVersion(PostDeleteVolumeVersionEnum version) {
        this.version = version;
        return this;
    }
}