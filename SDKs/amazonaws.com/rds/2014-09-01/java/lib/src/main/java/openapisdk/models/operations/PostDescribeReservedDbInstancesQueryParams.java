package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedDbInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeReservedDbInstancesActionEnum action;
    public PostDescribeReservedDbInstancesQueryParams withAction(PostDescribeReservedDbInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeReservedDbInstancesVersionEnum version;
    public PostDescribeReservedDbInstancesQueryParams withVersion(PostDescribeReservedDbInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}