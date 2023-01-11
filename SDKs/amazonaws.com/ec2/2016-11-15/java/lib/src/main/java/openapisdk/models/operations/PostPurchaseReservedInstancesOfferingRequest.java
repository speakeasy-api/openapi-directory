package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPurchaseReservedInstancesOfferingRequest {
    public PostPurchaseReservedInstancesOfferingQueryParams queryParams;
    public PostPurchaseReservedInstancesOfferingRequest withQueryParams(PostPurchaseReservedInstancesOfferingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPurchaseReservedInstancesOfferingHeaders headers;
    public PostPurchaseReservedInstancesOfferingRequest withHeaders(PostPurchaseReservedInstancesOfferingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPurchaseReservedInstancesOfferingRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}