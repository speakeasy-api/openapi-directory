package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetImagePipelineResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imagePipeline")
    public ImagePipeline imagePipeline;
    public GetImagePipelineResponse withImagePipeline(ImagePipeline imagePipeline) {
        this.imagePipeline = imagePipeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GetImagePipelineResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}