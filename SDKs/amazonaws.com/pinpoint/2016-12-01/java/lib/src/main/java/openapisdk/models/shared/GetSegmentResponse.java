package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSegmentResponse {
    @JsonProperty("SegmentResponse")
    public SegmentResponse segmentResponse;
    public GetSegmentResponse withSegmentResponse(SegmentResponse segmentResponse) {
        this.segmentResponse = segmentResponse;
        return this;
    }
}