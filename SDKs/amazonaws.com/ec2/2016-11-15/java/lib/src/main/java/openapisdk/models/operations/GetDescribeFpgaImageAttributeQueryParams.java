package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeFpgaImageAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeFpgaImageAttributeActionEnum action;
    public GetDescribeFpgaImageAttributeQueryParams withAction(GetDescribeFpgaImageAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Attribute")
    public GetDescribeFpgaImageAttributeAttributeEnum attribute;
    public GetDescribeFpgaImageAttributeQueryParams withAttribute(GetDescribeFpgaImageAttributeAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDescribeFpgaImageAttributeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FpgaImageId")
    public String fpgaImageId;
    public GetDescribeFpgaImageAttributeQueryParams withFpgaImageId(String fpgaImageId) {
        this.fpgaImageId = fpgaImageId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeFpgaImageAttributeVersionEnum version;
    public GetDescribeFpgaImageAttributeQueryParams withVersion(GetDescribeFpgaImageAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}