package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateSegmentResponse {
    @JsonProperty("SegmentResponse")
    public SegmentResponse segmentResponse;
    public CreateSegmentResponse withSegmentResponse(SegmentResponse segmentResponse) {
        this.segmentResponse = segmentResponse;
        return this;
    }
}