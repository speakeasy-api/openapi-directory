package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMedicalTranscriptionJobRequest {
    public DeleteMedicalTranscriptionJobHeaders headers;
    public DeleteMedicalTranscriptionJobRequest withHeaders(DeleteMedicalTranscriptionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteMedicalTranscriptionJobRequest request;
    public DeleteMedicalTranscriptionJobRequest withRequest(openapisdk.models.shared.DeleteMedicalTranscriptionJobRequest request) {
        this.request = request;
        return this;
    }
}