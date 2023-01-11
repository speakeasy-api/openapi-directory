package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateInstanceEventWindowRequest {
    public PostCreateInstanceEventWindowQueryParams queryParams;
    public PostCreateInstanceEventWindowRequest withQueryParams(PostCreateInstanceEventWindowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateInstanceEventWindowHeaders headers;
    public PostCreateInstanceEventWindowRequest withHeaders(PostCreateInstanceEventWindowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateInstanceEventWindowRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}