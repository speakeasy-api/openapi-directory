package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPurchaseReservedNodeOfferingRequest {
    public PostPurchaseReservedNodeOfferingQueryParams queryParams;
    public PostPurchaseReservedNodeOfferingRequest withQueryParams(PostPurchaseReservedNodeOfferingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPurchaseReservedNodeOfferingHeaders headers;
    public PostPurchaseReservedNodeOfferingRequest withHeaders(PostPurchaseReservedNodeOfferingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPurchaseReservedNodeOfferingRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}