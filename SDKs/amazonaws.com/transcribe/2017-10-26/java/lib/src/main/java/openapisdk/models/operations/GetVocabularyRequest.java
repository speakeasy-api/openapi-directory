package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVocabularyRequest {
    public GetVocabularyHeaders headers;
    public GetVocabularyRequest withHeaders(GetVocabularyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetVocabularyRequest request;
    public GetVocabularyRequest withRequest(openapisdk.models.shared.GetVocabularyRequest request) {
        this.request = request;
        return this;
    }
}