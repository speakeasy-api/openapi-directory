package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDetectorModelAnalysisResultsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisResults")
    public AnalysisResult[] analysisResults;
    public GetDetectorModelAnalysisResultsResponse withAnalysisResults(AnalysisResult[] analysisResults) {
        this.analysisResults = analysisResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetDetectorModelAnalysisResultsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}