package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCustomAvailabilityZoneRequest {
    public PostCreateCustomAvailabilityZoneQueryParams queryParams;
    public PostCreateCustomAvailabilityZoneRequest withQueryParams(PostCreateCustomAvailabilityZoneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateCustomAvailabilityZoneHeaders headers;
    public PostCreateCustomAvailabilityZoneRequest withHeaders(PostCreateCustomAvailabilityZoneHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateCustomAvailabilityZoneRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}