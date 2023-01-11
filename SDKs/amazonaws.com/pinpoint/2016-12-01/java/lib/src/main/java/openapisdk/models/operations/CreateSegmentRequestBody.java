package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateSegmentRequestBody {
    @JsonProperty("WriteSegmentRequest")
    public CreateSegmentRequestBodyWriteSegmentRequest writeSegmentRequest;
    public CreateSegmentRequestBody withWriteSegmentRequest(CreateSegmentRequestBodyWriteSegmentRequest writeSegmentRequest) {
        this.writeSegmentRequest = writeSegmentRequest;
        return this;
    }
}