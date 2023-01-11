package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateSegmentRequestBody {
    @JsonProperty("WriteSegmentRequest")
    public UpdateSegmentRequestBodyWriteSegmentRequest writeSegmentRequest;
    public UpdateSegmentRequestBody withWriteSegmentRequest(UpdateSegmentRequestBodyWriteSegmentRequest writeSegmentRequest) {
        this.writeSegmentRequest = writeSegmentRequest;
        return this;
    }
}