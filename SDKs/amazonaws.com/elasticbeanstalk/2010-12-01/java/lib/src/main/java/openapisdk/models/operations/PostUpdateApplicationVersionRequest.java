package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateApplicationVersionRequest {
    public PostUpdateApplicationVersionQueryParams queryParams;
    public PostUpdateApplicationVersionRequest withQueryParams(PostUpdateApplicationVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateApplicationVersionHeaders headers;
    public PostUpdateApplicationVersionRequest withHeaders(PostUpdateApplicationVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateApplicationVersionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}