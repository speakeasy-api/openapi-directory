package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteImagePipelineResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imagePipelineArn")
    public String imagePipelineArn;
    public DeleteImagePipelineResponse withImagePipelineArn(String imagePipelineArn) {
        this.imagePipelineArn = imagePipelineArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public DeleteImagePipelineResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}