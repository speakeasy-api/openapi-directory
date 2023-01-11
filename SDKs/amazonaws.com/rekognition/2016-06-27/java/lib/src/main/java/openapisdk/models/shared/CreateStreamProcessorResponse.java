package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStreamProcessorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamProcessorArn")
    public String streamProcessorArn;
    public CreateStreamProcessorResponse withStreamProcessorArn(String streamProcessorArn) {
        this.streamProcessorArn = streamProcessorArn;
        return this;
    }
}