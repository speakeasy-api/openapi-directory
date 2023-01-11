package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelConversionTaskRequest {
    public PostCancelConversionTaskQueryParams queryParams;
    public PostCancelConversionTaskRequest withQueryParams(PostCancelConversionTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCancelConversionTaskHeaders headers;
    public PostCancelConversionTaskRequest withHeaders(PostCancelConversionTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCancelConversionTaskRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}