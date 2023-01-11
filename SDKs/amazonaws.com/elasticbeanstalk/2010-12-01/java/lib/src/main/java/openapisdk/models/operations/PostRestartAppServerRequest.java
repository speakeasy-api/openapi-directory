package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestartAppServerRequest {
    public PostRestartAppServerQueryParams queryParams;
    public PostRestartAppServerRequest withQueryParams(PostRestartAppServerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRestartAppServerHeaders headers;
    public PostRestartAppServerRequest withHeaders(PostRestartAppServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRestartAppServerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}