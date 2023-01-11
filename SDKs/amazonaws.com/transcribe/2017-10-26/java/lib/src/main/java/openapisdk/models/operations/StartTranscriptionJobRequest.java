package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartTranscriptionJobRequest {
    public StartTranscriptionJobHeaders headers;
    public StartTranscriptionJobRequest withHeaders(StartTranscriptionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartTranscriptionJobRequest request;
    public StartTranscriptionJobRequest withRequest(openapisdk.models.shared.StartTranscriptionJobRequest request) {
        this.request = request;
        return this;
    }
}