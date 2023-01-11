package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSegmentVersionsResponse {
    @JsonProperty("SegmentsResponse")
    public SegmentsResponse segmentsResponse;
    public GetSegmentVersionsResponse withSegmentsResponse(SegmentsResponse segmentsResponse) {
        this.segmentsResponse = segmentsResponse;
        return this;
    }
}