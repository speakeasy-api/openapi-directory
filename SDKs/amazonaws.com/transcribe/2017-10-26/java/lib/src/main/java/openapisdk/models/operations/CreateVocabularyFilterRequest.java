package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVocabularyFilterRequest {
    public CreateVocabularyFilterHeaders headers;
    public CreateVocabularyFilterRequest withHeaders(CreateVocabularyFilterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateVocabularyFilterRequest request;
    public CreateVocabularyFilterRequest withRequest(openapisdk.models.shared.CreateVocabularyFilterRequest request) {
        this.request = request;
        return this;
    }
}