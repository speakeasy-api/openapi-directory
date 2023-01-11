package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetCapacityReservationUsageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetCapacityReservationUsageActionEnum action;
    public PostGetCapacityReservationUsageQueryParams withAction(PostGetCapacityReservationUsageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetCapacityReservationUsageVersionEnum version;
    public PostGetCapacityReservationUsageQueryParams withVersion(PostGetCapacityReservationUsageVersionEnum version) {
        this.version = version;
        return this;
    }
}