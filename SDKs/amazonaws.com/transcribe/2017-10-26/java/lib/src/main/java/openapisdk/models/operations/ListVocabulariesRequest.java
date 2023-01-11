package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVocabulariesRequest {
    public ListVocabulariesQueryParams queryParams;
    public ListVocabulariesRequest withQueryParams(ListVocabulariesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVocabulariesHeaders headers;
    public ListVocabulariesRequest withHeaders(ListVocabulariesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListVocabulariesRequest request;
    public ListVocabulariesRequest withRequest(openapisdk.models.shared.ListVocabulariesRequest request) {
        this.request = request;
        return this;
    }
}