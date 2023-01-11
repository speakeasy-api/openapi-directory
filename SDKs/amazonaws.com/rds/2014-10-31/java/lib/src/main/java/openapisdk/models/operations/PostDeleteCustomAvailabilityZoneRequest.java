package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteCustomAvailabilityZoneRequest {
    public PostDeleteCustomAvailabilityZoneQueryParams queryParams;
    public PostDeleteCustomAvailabilityZoneRequest withQueryParams(PostDeleteCustomAvailabilityZoneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteCustomAvailabilityZoneHeaders headers;
    public PostDeleteCustomAvailabilityZoneRequest withHeaders(PostDeleteCustomAvailabilityZoneHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteCustomAvailabilityZoneRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}