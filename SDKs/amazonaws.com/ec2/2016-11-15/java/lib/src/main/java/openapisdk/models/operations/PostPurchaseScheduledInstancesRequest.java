package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPurchaseScheduledInstancesRequest {
    public PostPurchaseScheduledInstancesQueryParams queryParams;
    public PostPurchaseScheduledInstancesRequest withQueryParams(PostPurchaseScheduledInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPurchaseScheduledInstancesHeaders headers;
    public PostPurchaseScheduledInstancesRequest withHeaders(PostPurchaseScheduledInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPurchaseScheduledInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}