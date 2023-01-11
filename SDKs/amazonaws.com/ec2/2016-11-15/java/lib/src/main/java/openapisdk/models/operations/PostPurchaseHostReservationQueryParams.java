package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPurchaseHostReservationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPurchaseHostReservationActionEnum action;
    public PostPurchaseHostReservationQueryParams withAction(PostPurchaseHostReservationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPurchaseHostReservationVersionEnum version;
    public PostPurchaseHostReservationQueryParams withVersion(PostPurchaseHostReservationVersionEnum version) {
        this.version = version;
        return this;
    }
}