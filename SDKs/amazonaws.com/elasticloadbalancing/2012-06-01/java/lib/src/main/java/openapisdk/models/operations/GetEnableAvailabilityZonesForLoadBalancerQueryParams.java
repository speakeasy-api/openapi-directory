package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnableAvailabilityZonesForLoadBalancerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetEnableAvailabilityZonesForLoadBalancerActionEnum action;
    public GetEnableAvailabilityZonesForLoadBalancerQueryParams withAction(GetEnableAvailabilityZonesForLoadBalancerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AvailabilityZones")
    public String[] availabilityZones;
    public GetEnableAvailabilityZonesForLoadBalancerQueryParams withAvailabilityZones(String[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;
    public GetEnableAvailabilityZonesForLoadBalancerQueryParams withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetEnableAvailabilityZonesForLoadBalancerVersionEnum version;
    public GetEnableAvailabilityZonesForLoadBalancerQueryParams withVersion(GetEnableAvailabilityZonesForLoadBalancerVersionEnum version) {
        this.version = version;
        return this;
    }
}