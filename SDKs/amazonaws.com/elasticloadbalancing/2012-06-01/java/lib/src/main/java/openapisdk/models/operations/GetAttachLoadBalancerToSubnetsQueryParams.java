package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttachLoadBalancerToSubnetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAttachLoadBalancerToSubnetsActionEnum action;
    public GetAttachLoadBalancerToSubnetsQueryParams withAction(GetAttachLoadBalancerToSubnetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;
    public GetAttachLoadBalancerToSubnetsQueryParams withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Subnets")
    public String[] subnets;
    public GetAttachLoadBalancerToSubnetsQueryParams withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAttachLoadBalancerToSubnetsVersionEnum version;
    public GetAttachLoadBalancerToSubnetsQueryParams withVersion(GetAttachLoadBalancerToSubnetsVersionEnum version) {
        this.version = version;
        return this;
    }
}