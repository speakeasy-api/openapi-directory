package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommentReactionsRequest {
    public GetCommentReactionsQueryParams queryParams;
    public GetCommentReactionsRequest withQueryParams(GetCommentReactionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCommentReactionsHeaders headers;
    public GetCommentReactionsRequest withHeaders(GetCommentReactionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCommentReactionsInput request;
    public GetCommentReactionsRequest withRequest(openapisdk.models.shared.GetCommentReactionsInput request) {
        this.request = request;
        return this;
    }
}