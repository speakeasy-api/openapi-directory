package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteLoadBalancerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteLoadBalancerActionEnum action;
    public GetDeleteLoadBalancerQueryParams withAction(GetDeleteLoadBalancerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerArn")
    public String loadBalancerArn;
    public GetDeleteLoadBalancerQueryParams withLoadBalancerArn(String loadBalancerArn) {
        this.loadBalancerArn = loadBalancerArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteLoadBalancerVersionEnum version;
    public GetDeleteLoadBalancerQueryParams withVersion(GetDeleteLoadBalancerVersionEnum version) {
        this.version = version;
        return this;
    }
}