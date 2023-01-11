package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVocabularyFilterRequest {
    public GetVocabularyFilterHeaders headers;
    public GetVocabularyFilterRequest withHeaders(GetVocabularyFilterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetVocabularyFilterRequest request;
    public GetVocabularyFilterRequest withRequest(openapisdk.models.shared.GetVocabularyFilterRequest request) {
        this.request = request;
        return this;
    }
}