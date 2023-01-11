package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResetImageAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetResetImageAttributeActionEnum action;
    public GetResetImageAttributeQueryParams withAction(GetResetImageAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Attribute")
    public GetResetImageAttributeAttributeEnum attribute;
    public GetResetImageAttributeQueryParams withAttribute(GetResetImageAttributeAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetResetImageAttributeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ImageId")
    public String imageId;
    public GetResetImageAttributeQueryParams withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetResetImageAttributeVersionEnum version;
    public GetResetImageAttributeQueryParams withVersion(GetResetImageAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}