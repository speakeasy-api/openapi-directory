package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstancesHealthQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeInstancesHealthActionEnum action;
    public PostDescribeInstancesHealthQueryParams withAction(PostDescribeInstancesHealthActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeInstancesHealthVersionEnum version;
    public PostDescribeInstancesHealthQueryParams withVersion(PostDescribeInstancesHealthVersionEnum version) {
        this.version = version;
        return this;
    }
}