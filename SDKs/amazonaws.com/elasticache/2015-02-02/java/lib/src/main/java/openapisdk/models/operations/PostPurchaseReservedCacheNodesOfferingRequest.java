package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPurchaseReservedCacheNodesOfferingRequest {
    public PostPurchaseReservedCacheNodesOfferingQueryParams queryParams;
    public PostPurchaseReservedCacheNodesOfferingRequest withQueryParams(PostPurchaseReservedCacheNodesOfferingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPurchaseReservedCacheNodesOfferingHeaders headers;
    public PostPurchaseReservedCacheNodesOfferingRequest withHeaders(PostPurchaseReservedCacheNodesOfferingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPurchaseReservedCacheNodesOfferingRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}