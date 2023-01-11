package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeApplicationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeApplicationsActionEnum action;
    public GetDescribeApplicationsQueryParams withAction(GetDescribeApplicationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ApplicationNames")
    public String[] applicationNames;
    public GetDescribeApplicationsQueryParams withApplicationNames(String[] applicationNames) {
        this.applicationNames = applicationNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeApplicationsVersionEnum version;
    public GetDescribeApplicationsQueryParams withVersion(GetDescribeApplicationsVersionEnum version) {
        this.version = version;
        return this;
    }
}