package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableVolumeIoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnableVolumeIoActionEnum action;
    public PostEnableVolumeIoQueryParams withAction(PostEnableVolumeIoActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnableVolumeIoVersionEnum version;
    public PostEnableVolumeIoQueryParams withVersion(PostEnableVolumeIoVersionEnum version) {
        this.version = version;
        return this;
    }
}