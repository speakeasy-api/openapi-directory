package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeApplicationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeApplicationsActionEnum action;
    public PostDescribeApplicationsQueryParams withAction(PostDescribeApplicationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeApplicationsVersionEnum version;
    public PostDescribeApplicationsQueryParams withVersion(PostDescribeApplicationsVersionEnum version) {
        this.version = version;
        return this;
    }
}