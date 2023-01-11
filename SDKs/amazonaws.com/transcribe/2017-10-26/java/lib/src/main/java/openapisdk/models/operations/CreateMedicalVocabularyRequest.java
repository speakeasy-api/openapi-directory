package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMedicalVocabularyRequest {
    public CreateMedicalVocabularyHeaders headers;
    public CreateMedicalVocabularyRequest withHeaders(CreateMedicalVocabularyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateMedicalVocabularyRequest request;
    public CreateMedicalVocabularyRequest withRequest(openapisdk.models.shared.CreateMedicalVocabularyRequest request) {
        this.request = request;
        return this;
    }
}