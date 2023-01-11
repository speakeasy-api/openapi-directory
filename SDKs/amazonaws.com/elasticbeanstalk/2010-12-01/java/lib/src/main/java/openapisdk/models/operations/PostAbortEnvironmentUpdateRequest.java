package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAbortEnvironmentUpdateRequest {
    public PostAbortEnvironmentUpdateQueryParams queryParams;
    public PostAbortEnvironmentUpdateRequest withQueryParams(PostAbortEnvironmentUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAbortEnvironmentUpdateHeaders headers;
    public PostAbortEnvironmentUpdateRequest withHeaders(PostAbortEnvironmentUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAbortEnvironmentUpdateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}