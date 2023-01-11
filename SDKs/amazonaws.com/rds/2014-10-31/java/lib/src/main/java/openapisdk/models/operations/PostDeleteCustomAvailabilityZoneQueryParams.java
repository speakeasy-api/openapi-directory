package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteCustomAvailabilityZoneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteCustomAvailabilityZoneActionEnum action;
    public PostDeleteCustomAvailabilityZoneQueryParams withAction(PostDeleteCustomAvailabilityZoneActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteCustomAvailabilityZoneVersionEnum version;
    public PostDeleteCustomAvailabilityZoneQueryParams withVersion(PostDeleteCustomAvailabilityZoneVersionEnum version) {
        this.version = version;
        return this;
    }
}