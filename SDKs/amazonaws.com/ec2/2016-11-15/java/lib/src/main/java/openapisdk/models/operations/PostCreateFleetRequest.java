package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateFleetRequest {
    public PostCreateFleetQueryParams queryParams;
    public PostCreateFleetRequest withQueryParams(PostCreateFleetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateFleetHeaders headers;
    public PostCreateFleetRequest withHeaders(PostCreateFleetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateFleetRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}