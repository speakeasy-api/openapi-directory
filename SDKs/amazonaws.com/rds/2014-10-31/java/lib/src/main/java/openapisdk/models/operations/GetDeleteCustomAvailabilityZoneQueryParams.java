package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteCustomAvailabilityZoneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteCustomAvailabilityZoneActionEnum action;
    public GetDeleteCustomAvailabilityZoneQueryParams withAction(GetDeleteCustomAvailabilityZoneActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CustomAvailabilityZoneId")
    public String customAvailabilityZoneId;
    public GetDeleteCustomAvailabilityZoneQueryParams withCustomAvailabilityZoneId(String customAvailabilityZoneId) {
        this.customAvailabilityZoneId = customAvailabilityZoneId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteCustomAvailabilityZoneVersionEnum version;
    public GetDeleteCustomAvailabilityZoneQueryParams withVersion(GetDeleteCustomAvailabilityZoneVersionEnum version) {
        this.version = version;
        return this;
    }
}