package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVolumeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyVolumeActionEnum action;
    public PostModifyVolumeQueryParams withAction(PostModifyVolumeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyVolumeVersionEnum version;
    public PostModifyVolumeQueryParams withVersion(PostModifyVolumeVersionEnum version) {
        this.version = version;
        return this;
    }
}