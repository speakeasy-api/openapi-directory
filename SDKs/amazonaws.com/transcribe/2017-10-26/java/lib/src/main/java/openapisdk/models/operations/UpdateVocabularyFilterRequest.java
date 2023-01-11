package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVocabularyFilterRequest {
    public UpdateVocabularyFilterHeaders headers;
    public UpdateVocabularyFilterRequest withHeaders(UpdateVocabularyFilterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateVocabularyFilterRequest request;
    public UpdateVocabularyFilterRequest withRequest(openapisdk.models.shared.UpdateVocabularyFilterRequest request) {
        this.request = request;
        return this;
    }
}