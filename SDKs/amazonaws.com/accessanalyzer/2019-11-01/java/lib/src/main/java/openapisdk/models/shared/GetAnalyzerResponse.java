package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetAnalyzerResponse
 * The response to the request.
**/
public class GetAnalyzerResponse {
    @JsonProperty("analyzer")
    public AnalyzerSummary analyzer;
    public GetAnalyzerResponse withAnalyzer(AnalyzerSummary analyzer) {
        this.analyzer = analyzer;
        return this;
    }
}