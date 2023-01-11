package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeInstancesHealthQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeInstancesHealthActionEnum action;
    public GetDescribeInstancesHealthQueryParams withAction(GetDescribeInstancesHealthActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AttributeNames")
    public openapisdk.models.shared.InstancesHealthAttributeEnum[] attributeNames;
    public GetDescribeInstancesHealthQueryParams withAttributeNames(openapisdk.models.shared.InstancesHealthAttributeEnum[] attributeNames) {
        this.attributeNames = attributeNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentId")
    public String environmentId;
    public GetDescribeInstancesHealthQueryParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentName")
    public String environmentName;
    public GetDescribeInstancesHealthQueryParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDescribeInstancesHealthQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeInstancesHealthVersionEnum version;
    public GetDescribeInstancesHealthQueryParams withVersion(GetDescribeInstancesHealthVersionEnum version) {
        this.version = version;
        return this;
    }
}