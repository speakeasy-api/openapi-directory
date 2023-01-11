package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartMedicalTranscriptionJobRequest {
    public StartMedicalTranscriptionJobHeaders headers;
    public StartMedicalTranscriptionJobRequest withHeaders(StartMedicalTranscriptionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartMedicalTranscriptionJobRequest request;
    public StartMedicalTranscriptionJobRequest withRequest(openapisdk.models.shared.StartMedicalTranscriptionJobRequest request) {
        this.request = request;
        return this;
    }
}