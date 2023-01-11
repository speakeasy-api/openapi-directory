package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMedicalVocabularyRequest {
    public GetMedicalVocabularyHeaders headers;
    public GetMedicalVocabularyRequest withHeaders(GetMedicalVocabularyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetMedicalVocabularyRequest request;
    public GetMedicalVocabularyRequest withRequest(openapisdk.models.shared.GetMedicalVocabularyRequest request) {
        this.request = request;
        return this;
    }
}