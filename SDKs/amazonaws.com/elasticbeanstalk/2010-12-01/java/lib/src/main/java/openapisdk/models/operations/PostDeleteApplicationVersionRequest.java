package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteApplicationVersionRequest {
    public PostDeleteApplicationVersionQueryParams queryParams;
    public PostDeleteApplicationVersionRequest withQueryParams(PostDeleteApplicationVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteApplicationVersionHeaders headers;
    public PostDeleteApplicationVersionRequest withHeaders(PostDeleteApplicationVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteApplicationVersionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}