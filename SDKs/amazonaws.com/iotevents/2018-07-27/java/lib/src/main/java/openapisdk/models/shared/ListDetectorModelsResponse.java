package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDetectorModelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectorModelSummaries")
    public DetectorModelSummary[] detectorModelSummaries;
    public ListDetectorModelsResponse withDetectorModelSummaries(DetectorModelSummary[] detectorModelSummaries) {
        this.detectorModelSummaries = detectorModelSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDetectorModelsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}