package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyAvailabilityZoneGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyAvailabilityZoneGroupActionEnum action;
    public PostModifyAvailabilityZoneGroupQueryParams withAction(PostModifyAvailabilityZoneGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyAvailabilityZoneGroupVersionEnum version;
    public PostModifyAvailabilityZoneGroupQueryParams withVersion(PostModifyAvailabilityZoneGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}