package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeFleetInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeFleetInstancesActionEnum action;
    public PostDescribeFleetInstancesQueryParams withAction(PostDescribeFleetInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeFleetInstancesVersionEnum version;
    public PostDescribeFleetInstancesQueryParams withVersion(PostDescribeFleetInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}