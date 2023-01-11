package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommentsForComparedCommitRequest {
    public GetCommentsForComparedCommitQueryParams queryParams;
    public GetCommentsForComparedCommitRequest withQueryParams(GetCommentsForComparedCommitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCommentsForComparedCommitHeaders headers;
    public GetCommentsForComparedCommitRequest withHeaders(GetCommentsForComparedCommitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCommentsForComparedCommitInput request;
    public GetCommentsForComparedCommitRequest withRequest(openapisdk.models.shared.GetCommentsForComparedCommitInput request) {
        this.request = request;
        return this;
    }
}