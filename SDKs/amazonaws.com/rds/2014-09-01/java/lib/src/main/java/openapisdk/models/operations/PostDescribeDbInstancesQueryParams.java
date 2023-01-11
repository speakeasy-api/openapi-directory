package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDbInstancesActionEnum action;
    public PostDescribeDbInstancesQueryParams withAction(PostDescribeDbInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDbInstancesVersionEnum version;
    public PostDescribeDbInstancesQueryParams withVersion(PostDescribeDbInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}