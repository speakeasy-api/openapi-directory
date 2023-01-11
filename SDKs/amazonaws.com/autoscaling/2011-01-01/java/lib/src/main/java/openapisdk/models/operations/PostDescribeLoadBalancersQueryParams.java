package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLoadBalancersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeLoadBalancersActionEnum action;
    public PostDescribeLoadBalancersQueryParams withAction(PostDescribeLoadBalancersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeLoadBalancersVersionEnum version;
    public PostDescribeLoadBalancersQueryParams withVersion(PostDescribeLoadBalancersVersionEnum version) {
        this.version = version;
        return this;
    }
}