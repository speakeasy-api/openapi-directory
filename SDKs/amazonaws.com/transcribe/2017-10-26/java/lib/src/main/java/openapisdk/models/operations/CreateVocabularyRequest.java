package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVocabularyRequest {
    public CreateVocabularyHeaders headers;
    public CreateVocabularyRequest withHeaders(CreateVocabularyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateVocabularyRequest request;
    public CreateVocabularyRequest withRequest(openapisdk.models.shared.CreateVocabularyRequest request) {
        this.request = request;
        return this;
    }
}