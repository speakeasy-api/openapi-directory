package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeImageAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeImageAttributeActionEnum action;
    public GetDescribeImageAttributeQueryParams withAction(GetDescribeImageAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Attribute")
    public GetDescribeImageAttributeAttributeEnum attribute;
    public GetDescribeImageAttributeQueryParams withAttribute(GetDescribeImageAttributeAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDescribeImageAttributeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ImageId")
    public String imageId;
    public GetDescribeImageAttributeQueryParams withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeImageAttributeVersionEnum version;
    public GetDescribeImageAttributeQueryParams withVersion(GetDescribeImageAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}