package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSubnetCidrReservationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteSubnetCidrReservationActionEnum action;
    public PostDeleteSubnetCidrReservationQueryParams withAction(PostDeleteSubnetCidrReservationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteSubnetCidrReservationVersionEnum version;
    public PostDeleteSubnetCidrReservationQueryParams withVersion(PostDeleteSubnetCidrReservationVersionEnum version) {
        this.version = version;
        return this;
    }
}