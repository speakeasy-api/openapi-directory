package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSpotFleetInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeSpotFleetInstancesActionEnum action;
    public PostDescribeSpotFleetInstancesQueryParams withAction(PostDescribeSpotFleetInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeSpotFleetInstancesVersionEnum version;
    public PostDescribeSpotFleetInstancesQueryParams withVersion(PostDescribeSpotFleetInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}