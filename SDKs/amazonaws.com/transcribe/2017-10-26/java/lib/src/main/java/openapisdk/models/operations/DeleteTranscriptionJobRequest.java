package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTranscriptionJobRequest {
    public DeleteTranscriptionJobHeaders headers;
    public DeleteTranscriptionJobRequest withHeaders(DeleteTranscriptionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteTranscriptionJobRequest request;
    public DeleteTranscriptionJobRequest withRequest(openapisdk.models.shared.DeleteTranscriptionJobRequest request) {
        this.request = request;
        return this;
    }
}