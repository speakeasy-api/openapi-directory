package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelCapacityReservationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCancelCapacityReservationActionEnum action;
    public PostCancelCapacityReservationQueryParams withAction(PostCancelCapacityReservationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCancelCapacityReservationVersionEnum version;
    public PostCancelCapacityReservationQueryParams withVersion(PostCancelCapacityReservationVersionEnum version) {
        this.version = version;
        return this;
    }
}