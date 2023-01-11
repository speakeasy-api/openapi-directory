package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyInstanceCapacityReservationAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyInstanceCapacityReservationAttributesActionEnum action;
    public PostModifyInstanceCapacityReservationAttributesQueryParams withAction(PostModifyInstanceCapacityReservationAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyInstanceCapacityReservationAttributesVersionEnum version;
    public PostModifyInstanceCapacityReservationAttributesQueryParams withVersion(PostModifyInstanceCapacityReservationAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}