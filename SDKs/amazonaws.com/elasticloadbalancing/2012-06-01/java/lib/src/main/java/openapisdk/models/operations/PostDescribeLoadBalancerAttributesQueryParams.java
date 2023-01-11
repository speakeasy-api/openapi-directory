package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLoadBalancerAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeLoadBalancerAttributesActionEnum action;
    public PostDescribeLoadBalancerAttributesQueryParams withAction(PostDescribeLoadBalancerAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeLoadBalancerAttributesVersionEnum version;
    public PostDescribeLoadBalancerAttributesQueryParams withVersion(PostDescribeLoadBalancerAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}