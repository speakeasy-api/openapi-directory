package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVocabularyRequest {
    public UpdateVocabularyHeaders headers;
    public UpdateVocabularyRequest withHeaders(UpdateVocabularyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateVocabularyRequest request;
    public UpdateVocabularyRequest withRequest(openapisdk.models.shared.UpdateVocabularyRequest request) {
        this.request = request;
        return this;
    }
}