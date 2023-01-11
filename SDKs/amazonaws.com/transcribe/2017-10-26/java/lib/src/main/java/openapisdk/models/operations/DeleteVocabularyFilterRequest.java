package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVocabularyFilterRequest {
    public DeleteVocabularyFilterHeaders headers;
    public DeleteVocabularyFilterRequest withHeaders(DeleteVocabularyFilterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteVocabularyFilterRequest request;
    public DeleteVocabularyFilterRequest withRequest(openapisdk.models.shared.DeleteVocabularyFilterRequest request) {
        this.request = request;
        return this;
    }
}