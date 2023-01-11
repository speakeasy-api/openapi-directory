package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResetFpgaImageAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetResetFpgaImageAttributeActionEnum action;
    public GetResetFpgaImageAttributeQueryParams withAction(GetResetFpgaImageAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Attribute")
    public GetResetFpgaImageAttributeAttributeEnum attribute;
    public GetResetFpgaImageAttributeQueryParams withAttribute(GetResetFpgaImageAttributeAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetResetFpgaImageAttributeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FpgaImageId")
    public String fpgaImageId;
    public GetResetFpgaImageAttributeQueryParams withFpgaImageId(String fpgaImageId) {
        this.fpgaImageId = fpgaImageId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetResetFpgaImageAttributeVersionEnum version;
    public GetResetFpgaImageAttributeQueryParams withVersion(GetResetFpgaImageAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}