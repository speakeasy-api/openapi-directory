package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCapacityReservationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateCapacityReservationActionEnum action;
    public PostCreateCapacityReservationQueryParams withAction(PostCreateCapacityReservationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateCapacityReservationVersionEnum version;
    public PostCreateCapacityReservationQueryParams withVersion(PostCreateCapacityReservationVersionEnum version) {
        this.version = version;
        return this;
    }
}