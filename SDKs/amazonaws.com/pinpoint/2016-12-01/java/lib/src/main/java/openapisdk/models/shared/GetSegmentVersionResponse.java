package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSegmentVersionResponse {
    @JsonProperty("SegmentResponse")
    public SegmentResponse segmentResponse;
    public GetSegmentVersionResponse withSegmentResponse(SegmentResponse segmentResponse) {
        this.segmentResponse = segmentResponse;
        return this;
    }
}