package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListModelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelSummaries")
    public ModelSummary[] modelSummaries;
    public ListModelsResponse withModelSummaries(ModelSummary[] modelSummaries) {
        this.modelSummaries = modelSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListModelsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}