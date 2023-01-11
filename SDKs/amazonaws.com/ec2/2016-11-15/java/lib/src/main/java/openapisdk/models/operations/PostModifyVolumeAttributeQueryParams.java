package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVolumeAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyVolumeAttributeActionEnum action;
    public PostModifyVolumeAttributeQueryParams withAction(PostModifyVolumeAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyVolumeAttributeVersionEnum version;
    public PostModifyVolumeAttributeQueryParams withVersion(PostModifyVolumeAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}