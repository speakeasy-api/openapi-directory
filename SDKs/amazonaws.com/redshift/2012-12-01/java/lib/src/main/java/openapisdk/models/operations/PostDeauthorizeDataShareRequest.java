package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeauthorizeDataShareRequest {
    public PostDeauthorizeDataShareQueryParams queryParams;
    public PostDeauthorizeDataShareRequest withQueryParams(PostDeauthorizeDataShareQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeauthorizeDataShareHeaders headers;
    public PostDeauthorizeDataShareRequest withHeaders(PostDeauthorizeDataShareHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeauthorizeDataShareRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}