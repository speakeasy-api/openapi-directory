package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMedicalVocabularyRequest {
    public UpdateMedicalVocabularyHeaders headers;
    public UpdateMedicalVocabularyRequest withHeaders(UpdateMedicalVocabularyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateMedicalVocabularyRequest request;
    public UpdateMedicalVocabularyRequest withRequest(openapisdk.models.shared.UpdateMedicalVocabularyRequest request) {
        this.request = request;
        return this;
    }
}