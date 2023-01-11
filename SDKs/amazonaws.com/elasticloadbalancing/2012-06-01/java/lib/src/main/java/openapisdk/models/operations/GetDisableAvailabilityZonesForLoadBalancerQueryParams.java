package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisableAvailabilityZonesForLoadBalancerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisableAvailabilityZonesForLoadBalancerActionEnum action;
    public GetDisableAvailabilityZonesForLoadBalancerQueryParams withAction(GetDisableAvailabilityZonesForLoadBalancerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AvailabilityZones")
    public String[] availabilityZones;
    public GetDisableAvailabilityZonesForLoadBalancerQueryParams withAvailabilityZones(String[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;
    public GetDisableAvailabilityZonesForLoadBalancerQueryParams withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisableAvailabilityZonesForLoadBalancerVersionEnum version;
    public GetDisableAvailabilityZonesForLoadBalancerQueryParams withVersion(GetDisableAvailabilityZonesForLoadBalancerVersionEnum version) {
        this.version = version;
        return this;
    }
}