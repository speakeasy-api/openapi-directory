package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeInstanceAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeInstanceAttributeActionEnum action;
    public GetDescribeInstanceAttributeQueryParams withAction(GetDescribeInstanceAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Attribute")
    public GetDescribeInstanceAttributeAttributeEnum attribute;
    public GetDescribeInstanceAttributeQueryParams withAttribute(GetDescribeInstanceAttributeAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDescribeInstanceAttributeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetDescribeInstanceAttributeQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeInstanceAttributeVersionEnum version;
    public GetDescribeInstanceAttributeQueryParams withVersion(GetDescribeInstanceAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}