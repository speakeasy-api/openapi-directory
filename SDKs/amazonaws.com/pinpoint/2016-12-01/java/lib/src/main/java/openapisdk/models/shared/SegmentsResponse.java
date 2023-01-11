package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SegmentsResponse
 * Provides information about all the segments that are associated with an application.
**/
public class SegmentsResponse {
    @JsonProperty("Item")
    public SegmentResponse[] item;
    public SegmentsResponse withItem(SegmentResponse[] item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public SegmentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}