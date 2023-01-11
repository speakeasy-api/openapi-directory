package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteRankExpressionRequest {
    public PostDeleteRankExpressionQueryParams queryParams;
    public PostDeleteRankExpressionRequest withQueryParams(PostDeleteRankExpressionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteRankExpressionHeaders headers;
    public PostDeleteRankExpressionRequest withHeaders(PostDeleteRankExpressionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteRankExpressionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}