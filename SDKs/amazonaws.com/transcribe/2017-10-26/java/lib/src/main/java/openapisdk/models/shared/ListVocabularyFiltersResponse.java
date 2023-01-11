package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListVocabularyFiltersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListVocabularyFiltersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VocabularyFilters")
    public VocabularyFilterInfo[] vocabularyFilters;
    public ListVocabularyFiltersResponse withVocabularyFilters(VocabularyFilterInfo[] vocabularyFilters) {
        this.vocabularyFilters = vocabularyFilters;
        return this;
    }
}