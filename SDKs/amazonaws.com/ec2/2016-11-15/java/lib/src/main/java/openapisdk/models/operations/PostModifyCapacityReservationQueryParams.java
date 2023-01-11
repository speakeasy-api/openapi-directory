package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyCapacityReservationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyCapacityReservationActionEnum action;
    public PostModifyCapacityReservationQueryParams withAction(PostModifyCapacityReservationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyCapacityReservationVersionEnum version;
    public PostModifyCapacityReservationQueryParams withVersion(PostModifyCapacityReservationVersionEnum version) {
        this.version = version;
        return this;
    }
}