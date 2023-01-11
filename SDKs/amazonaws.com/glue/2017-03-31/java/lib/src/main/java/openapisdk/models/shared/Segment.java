package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Segment
 * Defines a non-overlapping region of a table's partitions, allowing multiple requests to be run in parallel.
**/
public class Segment {
    @JsonProperty("SegmentNumber")
    public Long segmentNumber;
    public Segment withSegmentNumber(Long segmentNumber) {
        this.segmentNumber = segmentNumber;
        return this;
    }
    @JsonProperty("TotalSegments")
    public Long totalSegments;
    public Segment withTotalSegments(Long totalSegments) {
        this.totalSegments = totalSegments;
        return this;
    }
}