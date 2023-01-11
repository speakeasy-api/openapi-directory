package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListImagePipelinesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imagePipelineList")
    public ImagePipeline[] imagePipelineList;
    public ListImagePipelinesResponse withImagePipelineList(ImagePipeline[] imagePipelineList) {
        this.imagePipelineList = imagePipelineList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListImagePipelinesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ListImagePipelinesResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}