package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLanguageModelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Models")
    public LanguageModel[] models;
    public ListLanguageModelsResponse withModels(LanguageModel[] models) {
        this.models = models;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLanguageModelsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}