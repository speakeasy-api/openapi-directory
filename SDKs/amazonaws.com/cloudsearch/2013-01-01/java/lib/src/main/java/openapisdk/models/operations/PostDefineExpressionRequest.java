package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDefineExpressionRequest {
    public PostDefineExpressionQueryParams queryParams;
    public PostDefineExpressionRequest withQueryParams(PostDefineExpressionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDefineExpressionHeaders headers;
    public PostDefineExpressionRequest withHeaders(PostDefineExpressionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDefineExpressionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}