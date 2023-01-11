package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMergeCommitRequest {
    public GetMergeCommitHeaders headers;
    public GetMergeCommitRequest withHeaders(GetMergeCommitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetMergeCommitInput request;
    public GetMergeCommitRequest withRequest(openapisdk.models.shared.GetMergeCommitInput request) {
        this.request = request;
        return this;
    }
}