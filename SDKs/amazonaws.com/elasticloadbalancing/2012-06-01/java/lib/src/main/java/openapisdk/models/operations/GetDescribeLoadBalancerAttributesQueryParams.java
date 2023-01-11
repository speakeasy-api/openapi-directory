package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeLoadBalancerAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeLoadBalancerAttributesActionEnum action;
    public GetDescribeLoadBalancerAttributesQueryParams withAction(GetDescribeLoadBalancerAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;
    public GetDescribeLoadBalancerAttributesQueryParams withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeLoadBalancerAttributesVersionEnum version;
    public GetDescribeLoadBalancerAttributesQueryParams withVersion(GetDescribeLoadBalancerAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}