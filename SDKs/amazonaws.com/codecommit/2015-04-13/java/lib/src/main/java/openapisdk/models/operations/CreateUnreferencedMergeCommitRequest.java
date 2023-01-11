package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnreferencedMergeCommitRequest {
    public CreateUnreferencedMergeCommitHeaders headers;
    public CreateUnreferencedMergeCommitRequest withHeaders(CreateUnreferencedMergeCommitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateUnreferencedMergeCommitInput request;
    public CreateUnreferencedMergeCommitRequest withRequest(openapisdk.models.shared.CreateUnreferencedMergeCommitInput request) {
        this.request = request;
        return this;
    }
}