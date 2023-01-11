package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetachVolumeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDetachVolumeActionEnum action;
    public GetDetachVolumeQueryParams withAction(GetDetachVolumeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Device")
    public String device;
    public GetDetachVolumeQueryParams withDevice(String device) {
        this.device = device;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDetachVolumeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Force")
    public Boolean force;
    public GetDetachVolumeQueryParams withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetDetachVolumeQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDetachVolumeVersionEnum version;
    public GetDetachVolumeQueryParams withVersion(GetDetachVolumeVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VolumeId")
    public String volumeId;
    public GetDetachVolumeQueryParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}