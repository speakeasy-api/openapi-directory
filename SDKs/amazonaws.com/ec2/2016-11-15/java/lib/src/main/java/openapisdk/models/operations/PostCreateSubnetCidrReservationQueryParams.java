package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSubnetCidrReservationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateSubnetCidrReservationActionEnum action;
    public PostCreateSubnetCidrReservationQueryParams withAction(PostCreateSubnetCidrReservationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateSubnetCidrReservationVersionEnum version;
    public PostCreateSubnetCidrReservationQueryParams withVersion(PostCreateSubnetCidrReservationVersionEnum version) {
        this.version = version;
        return this;
    }
}