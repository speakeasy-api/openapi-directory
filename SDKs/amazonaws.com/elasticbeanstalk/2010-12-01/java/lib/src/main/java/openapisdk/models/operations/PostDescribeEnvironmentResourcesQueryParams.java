package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEnvironmentResourcesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeEnvironmentResourcesActionEnum action;
    public PostDescribeEnvironmentResourcesQueryParams withAction(PostDescribeEnvironmentResourcesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeEnvironmentResourcesVersionEnum version;
    public PostDescribeEnvironmentResourcesQueryParams withVersion(PostDescribeEnvironmentResourcesVersionEnum version) {
        this.version = version;
        return this;
    }
}