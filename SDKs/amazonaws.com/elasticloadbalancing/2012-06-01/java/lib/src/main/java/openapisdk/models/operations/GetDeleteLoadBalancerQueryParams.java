package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteLoadBalancerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteLoadBalancerActionEnum action;
    public GetDeleteLoadBalancerQueryParams withAction(GetDeleteLoadBalancerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;
    public GetDeleteLoadBalancerQueryParams withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteLoadBalancerVersionEnum version;
    public GetDeleteLoadBalancerQueryParams withVersion(GetDeleteLoadBalancerVersionEnum version) {
        this.version = version;
        return this;
    }
}