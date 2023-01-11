package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeregisterInstancesFromLoadBalancerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeregisterInstancesFromLoadBalancerActionEnum action;
    public PostDeregisterInstancesFromLoadBalancerQueryParams withAction(PostDeregisterInstancesFromLoadBalancerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeregisterInstancesFromLoadBalancerVersionEnum version;
    public PostDeregisterInstancesFromLoadBalancerQueryParams withVersion(PostDeregisterInstancesFromLoadBalancerVersionEnum version) {
        this.version = version;
        return this;
    }
}