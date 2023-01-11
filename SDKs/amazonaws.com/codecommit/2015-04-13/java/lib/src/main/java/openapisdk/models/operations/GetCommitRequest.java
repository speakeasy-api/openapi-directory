package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommitRequest {
    public GetCommitHeaders headers;
    public GetCommitRequest withHeaders(GetCommitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCommitInput request;
    public GetCommitRequest withRequest(openapisdk.models.shared.GetCommitInput request) {
        this.request = request;
        return this;
    }
}