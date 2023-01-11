package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableAvailabilityZonesForLoadBalancerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnableAvailabilityZonesForLoadBalancerActionEnum action;
    public PostEnableAvailabilityZonesForLoadBalancerQueryParams withAction(PostEnableAvailabilityZonesForLoadBalancerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnableAvailabilityZonesForLoadBalancerVersionEnum version;
    public PostEnableAvailabilityZonesForLoadBalancerQueryParams withVersion(PostEnableAvailabilityZonesForLoadBalancerVersionEnum version) {
        this.version = version;
        return this;
    }
}