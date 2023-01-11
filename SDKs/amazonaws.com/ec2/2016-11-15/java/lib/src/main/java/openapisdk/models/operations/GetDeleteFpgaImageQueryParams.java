package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteFpgaImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteFpgaImageActionEnum action;
    public GetDeleteFpgaImageQueryParams withAction(GetDeleteFpgaImageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteFpgaImageQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FpgaImageId")
    public String fpgaImageId;
    public GetDeleteFpgaImageQueryParams withFpgaImageId(String fpgaImageId) {
        this.fpgaImageId = fpgaImageId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteFpgaImageVersionEnum version;
    public GetDeleteFpgaImageQueryParams withVersion(GetDeleteFpgaImageVersionEnum version) {
        this.version = version;
        return this;
    }
}