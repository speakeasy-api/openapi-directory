package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateAvailabilityOptionsRequest {
    public PostUpdateAvailabilityOptionsQueryParams queryParams;
    public PostUpdateAvailabilityOptionsRequest withQueryParams(PostUpdateAvailabilityOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateAvailabilityOptionsHeaders headers;
    public PostUpdateAvailabilityOptionsRequest withHeaders(PostUpdateAvailabilityOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateAvailabilityOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}