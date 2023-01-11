package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteLoadBalancerListenersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteLoadBalancerListenersActionEnum action;
    public GetDeleteLoadBalancerListenersQueryParams withAction(GetDeleteLoadBalancerListenersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;
    public GetDeleteLoadBalancerListenersQueryParams withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerPorts")
    public Long[] loadBalancerPorts;
    public GetDeleteLoadBalancerListenersQueryParams withLoadBalancerPorts(Long[] loadBalancerPorts) {
        this.loadBalancerPorts = loadBalancerPorts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteLoadBalancerListenersVersionEnum version;
    public GetDeleteLoadBalancerListenersQueryParams withVersion(GetDeleteLoadBalancerListenersVersionEnum version) {
        this.version = version;
        return this;
    }
}