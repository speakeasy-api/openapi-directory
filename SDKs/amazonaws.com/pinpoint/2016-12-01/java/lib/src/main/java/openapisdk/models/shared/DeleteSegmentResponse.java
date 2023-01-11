package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSegmentResponse {
    @JsonProperty("SegmentResponse")
    public SegmentResponse segmentResponse;
    public DeleteSegmentResponse withSegmentResponse(SegmentResponse segmentResponse) {
        this.segmentResponse = segmentResponse;
        return this;
    }
}