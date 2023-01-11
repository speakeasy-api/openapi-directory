package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRealtimeContactAnalysisSegmentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListRealtimeContactAnalysisSegmentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("Segments")
    public RealtimeContactAnalysisSegment[] segments;
    public ListRealtimeContactAnalysisSegmentsResponse withSegments(RealtimeContactAnalysisSegment[] segments) {
        this.segments = segments;
        return this;
    }
}