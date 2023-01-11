package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConfigureHealthCheckQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetConfigureHealthCheckActionEnum action;
    public GetConfigureHealthCheckQueryParams withAction(GetConfigureHealthCheckActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HealthCheck")
    public GetConfigureHealthCheckHealthCheck healthCheck;
    public GetConfigureHealthCheckQueryParams withHealthCheck(GetConfigureHealthCheckHealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;
    public GetConfigureHealthCheckQueryParams withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetConfigureHealthCheckVersionEnum version;
    public GetConfigureHealthCheckQueryParams withVersion(GetConfigureHealthCheckVersionEnum version) {
        this.version = version;
        return this;
    }
}