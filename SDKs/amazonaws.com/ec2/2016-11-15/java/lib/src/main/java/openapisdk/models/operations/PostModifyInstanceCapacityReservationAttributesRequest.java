package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyInstanceCapacityReservationAttributesRequest {
    public PostModifyInstanceCapacityReservationAttributesQueryParams queryParams;
    public PostModifyInstanceCapacityReservationAttributesRequest withQueryParams(PostModifyInstanceCapacityReservationAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyInstanceCapacityReservationAttributesHeaders headers;
    public PostModifyInstanceCapacityReservationAttributesRequest withHeaders(PostModifyInstanceCapacityReservationAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyInstanceCapacityReservationAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}