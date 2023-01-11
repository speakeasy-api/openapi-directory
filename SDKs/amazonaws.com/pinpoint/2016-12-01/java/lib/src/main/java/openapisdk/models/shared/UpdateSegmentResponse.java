package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateSegmentResponse {
    @JsonProperty("SegmentResponse")
    public SegmentResponse segmentResponse;
    public UpdateSegmentResponse withSegmentResponse(SegmentResponse segmentResponse) {
        this.segmentResponse = segmentResponse;
        return this;
    }
}