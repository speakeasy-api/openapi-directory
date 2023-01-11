package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateReservedInstancesListingRequest {
    public PostCreateReservedInstancesListingQueryParams queryParams;
    public PostCreateReservedInstancesListingRequest withQueryParams(PostCreateReservedInstancesListingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateReservedInstancesListingHeaders headers;
    public PostCreateReservedInstancesListingRequest withHeaders(PostCreateReservedInstancesListingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateReservedInstancesListingRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}