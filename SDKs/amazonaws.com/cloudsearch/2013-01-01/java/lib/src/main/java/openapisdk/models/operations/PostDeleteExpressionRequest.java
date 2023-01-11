package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteExpressionRequest {
    public PostDeleteExpressionQueryParams queryParams;
    public PostDeleteExpressionRequest withQueryParams(PostDeleteExpressionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteExpressionHeaders headers;
    public PostDeleteExpressionRequest withHeaders(PostDeleteExpressionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteExpressionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}