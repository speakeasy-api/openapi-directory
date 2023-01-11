package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCancelReservedInstancesListingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCancelReservedInstancesListingActionEnum action;
    public GetCancelReservedInstancesListingQueryParams withAction(GetCancelReservedInstancesListingActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReservedInstancesListingId")
    public String reservedInstancesListingId;
    public GetCancelReservedInstancesListingQueryParams withReservedInstancesListingId(String reservedInstancesListingId) {
        this.reservedInstancesListingId = reservedInstancesListingId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCancelReservedInstancesListingVersionEnum version;
    public GetCancelReservedInstancesListingQueryParams withVersion(GetCancelReservedInstancesListingVersionEnum version) {
        this.version = version;
        return this;
    }
}