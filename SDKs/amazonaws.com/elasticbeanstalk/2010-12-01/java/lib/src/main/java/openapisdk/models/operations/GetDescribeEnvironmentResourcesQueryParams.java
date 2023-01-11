package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeEnvironmentResourcesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeEnvironmentResourcesActionEnum action;
    public GetDescribeEnvironmentResourcesQueryParams withAction(GetDescribeEnvironmentResourcesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentId")
    public String environmentId;
    public GetDescribeEnvironmentResourcesQueryParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentName")
    public String environmentName;
    public GetDescribeEnvironmentResourcesQueryParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeEnvironmentResourcesVersionEnum version;
    public GetDescribeEnvironmentResourcesQueryParams withVersion(GetDescribeEnvironmentResourcesVersionEnum version) {
        this.version = version;
        return this;
    }
}