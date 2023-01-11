package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVocabularyRequest {
    public DeleteVocabularyHeaders headers;
    public DeleteVocabularyRequest withHeaders(DeleteVocabularyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteVocabularyRequest request;
    public DeleteVocabularyRequest withRequest(openapisdk.models.shared.DeleteVocabularyRequest request) {
        this.request = request;
        return this;
    }
}