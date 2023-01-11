package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTranscriptionJobRequest {
    public GetTranscriptionJobHeaders headers;
    public GetTranscriptionJobRequest withHeaders(GetTranscriptionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTranscriptionJobRequest request;
    public GetTranscriptionJobRequest withRequest(openapisdk.models.shared.GetTranscriptionJobRequest request) {
        this.request = request;
        return this;
    }
}