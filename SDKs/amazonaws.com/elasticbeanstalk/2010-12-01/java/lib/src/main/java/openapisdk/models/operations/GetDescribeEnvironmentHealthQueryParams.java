package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeEnvironmentHealthQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeEnvironmentHealthActionEnum action;
    public GetDescribeEnvironmentHealthQueryParams withAction(GetDescribeEnvironmentHealthActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AttributeNames")
    public openapisdk.models.shared.EnvironmentHealthAttributeEnum[] attributeNames;
    public GetDescribeEnvironmentHealthQueryParams withAttributeNames(openapisdk.models.shared.EnvironmentHealthAttributeEnum[] attributeNames) {
        this.attributeNames = attributeNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentId")
    public String environmentId;
    public GetDescribeEnvironmentHealthQueryParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentName")
    public String environmentName;
    public GetDescribeEnvironmentHealthQueryParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeEnvironmentHealthVersionEnum version;
    public GetDescribeEnvironmentHealthQueryParams withVersion(GetDescribeEnvironmentHealthVersionEnum version) {
        this.version = version;
        return this;
    }
}