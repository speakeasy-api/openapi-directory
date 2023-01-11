package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVocabularyFiltersRequest {
    public ListVocabularyFiltersQueryParams queryParams;
    public ListVocabularyFiltersRequest withQueryParams(ListVocabularyFiltersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVocabularyFiltersHeaders headers;
    public ListVocabularyFiltersRequest withHeaders(ListVocabularyFiltersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListVocabularyFiltersRequest request;
    public ListVocabularyFiltersRequest withRequest(openapisdk.models.shared.ListVocabularyFiltersRequest request) {
        this.request = request;
        return this;
    }
}