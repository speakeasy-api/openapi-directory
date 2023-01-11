package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAnalyzersResponse
 * The response to the request.
**/
public class ListAnalyzersResponse {
    @JsonProperty("analyzers")
    public AnalyzerSummary[] analyzers;
    public ListAnalyzersResponse withAnalyzers(AnalyzerSummary[] analyzers) {
        this.analyzers = analyzers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAnalyzersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}