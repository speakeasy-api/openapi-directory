package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutTraceSegmentsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedTraceSegments")
    public UnprocessedTraceSegment[] unprocessedTraceSegments;
    public PutTraceSegmentsResult withUnprocessedTraceSegments(UnprocessedTraceSegment[] unprocessedTraceSegments) {
        this.unprocessedTraceSegments = unprocessedTraceSegments;
        return this;
    }
}