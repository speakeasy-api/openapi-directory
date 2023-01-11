package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEnvironmentHealthQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeEnvironmentHealthActionEnum action;
    public PostDescribeEnvironmentHealthQueryParams withAction(PostDescribeEnvironmentHealthActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeEnvironmentHealthVersionEnum version;
    public PostDescribeEnvironmentHealthQueryParams withVersion(PostDescribeEnvironmentHealthVersionEnum version) {
        this.version = version;
        return this;
    }
}