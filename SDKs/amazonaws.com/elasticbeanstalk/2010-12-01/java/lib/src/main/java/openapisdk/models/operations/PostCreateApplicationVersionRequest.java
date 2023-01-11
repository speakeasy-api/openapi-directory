package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateApplicationVersionRequest {
    public PostCreateApplicationVersionQueryParams queryParams;
    public PostCreateApplicationVersionRequest withQueryParams(PostCreateApplicationVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateApplicationVersionHeaders headers;
    public PostCreateApplicationVersionRequest withHeaders(PostCreateApplicationVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateApplicationVersionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}