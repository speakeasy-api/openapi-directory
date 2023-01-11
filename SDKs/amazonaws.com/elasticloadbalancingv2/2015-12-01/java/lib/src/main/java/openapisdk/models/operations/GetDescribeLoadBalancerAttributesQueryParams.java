package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeLoadBalancerAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeLoadBalancerAttributesActionEnum action;
    public GetDescribeLoadBalancerAttributesQueryParams withAction(GetDescribeLoadBalancerAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerArn")
    public String loadBalancerArn;
    public GetDescribeLoadBalancerAttributesQueryParams withLoadBalancerArn(String loadBalancerArn) {
        this.loadBalancerArn = loadBalancerArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeLoadBalancerAttributesVersionEnum version;
    public GetDescribeLoadBalancerAttributesQueryParams withVersion(GetDescribeLoadBalancerAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}