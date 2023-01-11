package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteInstanceEventWindowRequest {
    public PostDeleteInstanceEventWindowQueryParams queryParams;
    public PostDeleteInstanceEventWindowRequest withQueryParams(PostDeleteInstanceEventWindowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteInstanceEventWindowHeaders headers;
    public PostDeleteInstanceEventWindowRequest withHeaders(PostDeleteInstanceEventWindowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteInstanceEventWindowRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}