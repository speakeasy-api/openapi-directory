package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttachVolumeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAttachVolumeActionEnum action;
    public GetAttachVolumeQueryParams withAction(GetAttachVolumeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Device")
    public String device;
    public GetAttachVolumeQueryParams withDevice(String device) {
        this.device = device;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetAttachVolumeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetAttachVolumeQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAttachVolumeVersionEnum version;
    public GetAttachVolumeQueryParams withVersion(GetAttachVolumeVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VolumeId")
    public String volumeId;
    public GetAttachVolumeQueryParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}