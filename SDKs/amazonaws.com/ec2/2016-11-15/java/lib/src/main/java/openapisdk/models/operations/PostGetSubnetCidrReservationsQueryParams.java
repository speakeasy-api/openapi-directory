package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetSubnetCidrReservationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetSubnetCidrReservationsActionEnum action;
    public PostGetSubnetCidrReservationsQueryParams withAction(PostGetSubnetCidrReservationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetSubnetCidrReservationsVersionEnum version;
    public PostGetSubnetCidrReservationsQueryParams withVersion(PostGetSubnetCidrReservationsVersionEnum version) {
        this.version = version;
        return this;
    }
}