package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDetectorModelVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectorModelVersionSummaries")
    public DetectorModelVersionSummary[] detectorModelVersionSummaries;
    public ListDetectorModelVersionsResponse withDetectorModelVersionSummaries(DetectorModelVersionSummary[] detectorModelVersionSummaries) {
        this.detectorModelVersionSummaries = detectorModelVersionSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDetectorModelVersionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}