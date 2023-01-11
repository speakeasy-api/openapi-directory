package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLanguageModelsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListLanguageModelsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NameContains")
    public String nameContains;
    public ListLanguageModelsRequest withNameContains(String nameContains) {
        this.nameContains = nameContains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLanguageModelsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusEquals")
    public ModelStatusEnum statusEquals;
    public ListLanguageModelsRequest withStatusEquals(ModelStatusEnum statusEquals) {
        this.statusEquals = statusEquals;
        return this;
    }
}