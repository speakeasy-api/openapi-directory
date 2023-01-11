package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCustomAvailabilityZoneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateCustomAvailabilityZoneActionEnum action;
    public PostCreateCustomAvailabilityZoneQueryParams withAction(PostCreateCustomAvailabilityZoneActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateCustomAvailabilityZoneVersionEnum version;
    public PostCreateCustomAvailabilityZoneQueryParams withVersion(PostCreateCustomAvailabilityZoneVersionEnum version) {
        this.version = version;
        return this;
    }
}