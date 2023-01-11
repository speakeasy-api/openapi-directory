package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMedicalTranscriptionJobRequest {
    public GetMedicalTranscriptionJobHeaders headers;
    public GetMedicalTranscriptionJobRequest withHeaders(GetMedicalTranscriptionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetMedicalTranscriptionJobRequest request;
    public GetMedicalTranscriptionJobRequest withRequest(openapisdk.models.shared.GetMedicalTranscriptionJobRequest request) {
        this.request = request;
        return this;
    }
}