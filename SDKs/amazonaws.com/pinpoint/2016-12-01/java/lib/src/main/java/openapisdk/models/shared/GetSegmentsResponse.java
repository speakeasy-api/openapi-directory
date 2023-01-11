package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSegmentsResponse {
    @JsonProperty("SegmentsResponse")
    public SegmentsResponse segmentsResponse;
    public GetSegmentsResponse withSegmentsResponse(SegmentsResponse segmentsResponse) {
        this.segmentsResponse = segmentsResponse;
        return this;
    }
}