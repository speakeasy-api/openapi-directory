package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetInstanceHealthQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetInstanceHealthActionEnum action;
    public GetSetInstanceHealthQueryParams withAction(GetSetInstanceHealthActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HealthStatus")
    public String healthStatus;
    public GetSetInstanceHealthQueryParams withHealthStatus(String healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetSetInstanceHealthQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ShouldRespectGracePeriod")
    public Boolean shouldRespectGracePeriod;
    public GetSetInstanceHealthQueryParams withShouldRespectGracePeriod(Boolean shouldRespectGracePeriod) {
        this.shouldRespectGracePeriod = shouldRespectGracePeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetInstanceHealthVersionEnum version;
    public GetSetInstanceHealthQueryParams withVersion(GetSetInstanceHealthVersionEnum version) {
        this.version = version;
        return this;
    }
}