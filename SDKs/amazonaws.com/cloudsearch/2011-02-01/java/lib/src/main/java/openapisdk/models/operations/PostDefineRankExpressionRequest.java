package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDefineRankExpressionRequest {
    public PostDefineRankExpressionQueryParams queryParams;
    public PostDefineRankExpressionRequest withQueryParams(PostDefineRankExpressionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDefineRankExpressionHeaders headers;
    public PostDefineRankExpressionRequest withHeaders(PostDefineRankExpressionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDefineRankExpressionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}