package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteSubnetCidrReservationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteSubnetCidrReservationActionEnum action;
    public GetDeleteSubnetCidrReservationQueryParams withAction(GetDeleteSubnetCidrReservationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteSubnetCidrReservationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SubnetCidrReservationId")
    public String subnetCidrReservationId;
    public GetDeleteSubnetCidrReservationQueryParams withSubnetCidrReservationId(String subnetCidrReservationId) {
        this.subnetCidrReservationId = subnetCidrReservationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteSubnetCidrReservationVersionEnum version;
    public GetDeleteSubnetCidrReservationQueryParams withVersion(GetDeleteSubnetCidrReservationVersionEnum version) {
        this.version = version;
        return this;
    }
}