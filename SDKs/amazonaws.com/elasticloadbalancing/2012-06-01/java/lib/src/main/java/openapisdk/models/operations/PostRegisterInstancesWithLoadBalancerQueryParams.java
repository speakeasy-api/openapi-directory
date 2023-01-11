package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRegisterInstancesWithLoadBalancerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRegisterInstancesWithLoadBalancerActionEnum action;
    public PostRegisterInstancesWithLoadBalancerQueryParams withAction(PostRegisterInstancesWithLoadBalancerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRegisterInstancesWithLoadBalancerVersionEnum version;
    public PostRegisterInstancesWithLoadBalancerQueryParams withVersion(PostRegisterInstancesWithLoadBalancerVersionEnum version) {
        this.version = version;
        return this;
    }
}