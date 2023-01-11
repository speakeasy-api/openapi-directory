package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedInstancesListingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeReservedInstancesListingsActionEnum action;
    public PostDescribeReservedInstancesListingsQueryParams withAction(PostDescribeReservedInstancesListingsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeReservedInstancesListingsVersionEnum version;
    public PostDescribeReservedInstancesListingsQueryParams withVersion(PostDescribeReservedInstancesListingsVersionEnum version) {
        this.version = version;
        return this;
    }
}