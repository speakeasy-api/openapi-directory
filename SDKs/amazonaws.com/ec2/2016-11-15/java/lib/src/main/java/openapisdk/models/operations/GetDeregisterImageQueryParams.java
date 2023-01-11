package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeregisterImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeregisterImageActionEnum action;
    public GetDeregisterImageQueryParams withAction(GetDeregisterImageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeregisterImageQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ImageId")
    public String imageId;
    public GetDeregisterImageQueryParams withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeregisterImageVersionEnum version;
    public GetDeregisterImageQueryParams withVersion(GetDeregisterImageVersionEnum version) {
        this.version = version;
        return this;
    }
}