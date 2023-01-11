package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelReservedInstancesListingRequest {
    public PostCancelReservedInstancesListingQueryParams queryParams;
    public PostCancelReservedInstancesListingRequest withQueryParams(PostCancelReservedInstancesListingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCancelReservedInstancesListingHeaders headers;
    public PostCancelReservedInstancesListingRequest withHeaders(PostCancelReservedInstancesListingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCancelReservedInstancesListingRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}