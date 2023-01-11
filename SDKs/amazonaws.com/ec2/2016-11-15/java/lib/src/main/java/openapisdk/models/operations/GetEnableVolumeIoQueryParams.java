package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnableVolumeIoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetEnableVolumeIoActionEnum action;
    public GetEnableVolumeIoQueryParams withAction(GetEnableVolumeIoActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetEnableVolumeIoQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetEnableVolumeIoVersionEnum version;
    public GetEnableVolumeIoQueryParams withVersion(GetEnableVolumeIoVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VolumeId")
    public String volumeId;
    public GetEnableVolumeIoQueryParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}