package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMedicalVocabulariesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListMedicalVocabulariesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NameContains")
    public String nameContains;
    public ListMedicalVocabulariesRequest withNameContains(String nameContains) {
        this.nameContains = nameContains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListMedicalVocabulariesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateEquals")
    public VocabularyStateEnum stateEquals;
    public ListMedicalVocabulariesRequest withStateEquals(VocabularyStateEnum stateEquals) {
        this.stateEquals = stateEquals;
        return this;
    }
}