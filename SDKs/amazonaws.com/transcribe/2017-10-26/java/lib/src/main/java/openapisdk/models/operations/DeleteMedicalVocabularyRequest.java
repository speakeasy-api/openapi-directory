package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMedicalVocabularyRequest {
    public DeleteMedicalVocabularyHeaders headers;
    public DeleteMedicalVocabularyRequest withHeaders(DeleteMedicalVocabularyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteMedicalVocabularyRequest request;
    public DeleteMedicalVocabularyRequest withRequest(openapisdk.models.shared.DeleteMedicalVocabularyRequest request) {
        this.request = request;
        return this;
    }
}