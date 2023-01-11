package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeVolumeAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeVolumeAttributeActionEnum action;
    public GetDescribeVolumeAttributeQueryParams withAction(GetDescribeVolumeAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Attribute")
    public GetDescribeVolumeAttributeAttributeEnum attribute;
    public GetDescribeVolumeAttributeQueryParams withAttribute(GetDescribeVolumeAttributeAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDescribeVolumeAttributeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeVolumeAttributeVersionEnum version;
    public GetDescribeVolumeAttributeQueryParams withVersion(GetDescribeVolumeAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VolumeId")
    public String volumeId;
    public GetDescribeVolumeAttributeQueryParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}