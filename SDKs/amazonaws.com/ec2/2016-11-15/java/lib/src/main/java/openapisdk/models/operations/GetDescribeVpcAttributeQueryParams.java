package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeVpcAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeVpcAttributeActionEnum action;
    public GetDescribeVpcAttributeQueryParams withAction(GetDescribeVpcAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Attribute")
    public GetDescribeVpcAttributeAttributeEnum attribute;
    public GetDescribeVpcAttributeQueryParams withAttribute(GetDescribeVpcAttributeAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDescribeVpcAttributeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeVpcAttributeVersionEnum version;
    public GetDescribeVpcAttributeQueryParams withVersion(GetDescribeVpcAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcId")
    public String vpcId;
    public GetDescribeVpcAttributeQueryParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}