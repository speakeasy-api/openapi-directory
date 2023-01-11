package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyVolumeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyVolumeActionEnum action;
    public GetModifyVolumeQueryParams withAction(GetModifyVolumeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyVolumeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Iops")
    public Long iops;
    public GetModifyVolumeQueryParams withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MultiAttachEnabled")
    public Boolean multiAttachEnabled;
    public GetModifyVolumeQueryParams withMultiAttachEnabled(Boolean multiAttachEnabled) {
        this.multiAttachEnabled = multiAttachEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Size")
    public Long size;
    public GetModifyVolumeQueryParams withSize(Long size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Throughput")
    public Long throughput;
    public GetModifyVolumeQueryParams withThroughput(Long throughput) {
        this.throughput = throughput;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyVolumeVersionEnum version;
    public GetModifyVolumeQueryParams withVersion(GetModifyVolumeVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VolumeId")
    public String volumeId;
    public GetModifyVolumeQueryParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VolumeType")
    public GetModifyVolumeVolumeTypeEnum volumeType;
    public GetModifyVolumeQueryParams withVolumeType(GetModifyVolumeVolumeTypeEnum volumeType) {
        this.volumeType = volumeType;
        return this;
    }
}