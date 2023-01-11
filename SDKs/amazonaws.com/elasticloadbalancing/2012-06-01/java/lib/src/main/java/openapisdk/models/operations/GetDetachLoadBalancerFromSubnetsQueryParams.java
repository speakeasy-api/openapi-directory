package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetachLoadBalancerFromSubnetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDetachLoadBalancerFromSubnetsActionEnum action;
    public GetDetachLoadBalancerFromSubnetsQueryParams withAction(GetDetachLoadBalancerFromSubnetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;
    public GetDetachLoadBalancerFromSubnetsQueryParams withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Subnets")
    public String[] subnets;
    public GetDetachLoadBalancerFromSubnetsQueryParams withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDetachLoadBalancerFromSubnetsVersionEnum version;
    public GetDetachLoadBalancerFromSubnetsQueryParams withVersion(GetDetachLoadBalancerFromSubnetsVersionEnum version) {
        this.version = version;
        return this;
    }
}