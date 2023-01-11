package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPurchaseReservedDbInstancesOfferingRequest {
    public PostPurchaseReservedDbInstancesOfferingQueryParams queryParams;
    public PostPurchaseReservedDbInstancesOfferingRequest withQueryParams(PostPurchaseReservedDbInstancesOfferingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPurchaseReservedDbInstancesOfferingHeaders headers;
    public PostPurchaseReservedDbInstancesOfferingRequest withHeaders(PostPurchaseReservedDbInstancesOfferingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPurchaseReservedDbInstancesOfferingRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}