package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableAvailabilityZonesForLoadBalancerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisableAvailabilityZonesForLoadBalancerActionEnum action;
    public PostDisableAvailabilityZonesForLoadBalancerQueryParams withAction(PostDisableAvailabilityZonesForLoadBalancerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisableAvailabilityZonesForLoadBalancerVersionEnum version;
    public PostDisableAvailabilityZonesForLoadBalancerQueryParams withVersion(PostDisableAvailabilityZonesForLoadBalancerVersionEnum version) {
        this.version = version;
        return this;
    }
}