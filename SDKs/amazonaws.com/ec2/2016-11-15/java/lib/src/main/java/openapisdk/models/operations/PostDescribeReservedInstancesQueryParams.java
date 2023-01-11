package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeReservedInstancesActionEnum action;
    public PostDescribeReservedInstancesQueryParams withAction(PostDescribeReservedInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeReservedInstancesVersionEnum version;
    public PostDescribeReservedInstancesQueryParams withVersion(PostDescribeReservedInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}