package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeregisterTargetsRequest {
    public PostDeregisterTargetsQueryParams queryParams;
    public PostDeregisterTargetsRequest withQueryParams(PostDeregisterTargetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeregisterTargetsHeaders headers;
    public PostDeregisterTargetsRequest withHeaders(PostDeregisterTargetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeregisterTargetsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}