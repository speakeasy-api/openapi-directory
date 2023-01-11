package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetHostReservationPurchasePreviewQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetHostReservationPurchasePreviewActionEnum action;
    public PostGetHostReservationPurchasePreviewQueryParams withAction(PostGetHostReservationPurchasePreviewActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetHostReservationPurchasePreviewVersionEnum version;
    public PostGetHostReservationPurchasePreviewQueryParams withVersion(PostGetHostReservationPurchasePreviewVersionEnum version) {
        this.version = version;
        return this;
    }
}