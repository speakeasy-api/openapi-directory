package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartImagePipelineExecutionRequestBody {
    @JsonProperty("clientToken")
    public String clientToken;
    public StartImagePipelineExecutionRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("imagePipelineArn")
    public String imagePipelineArn;
    public StartImagePipelineExecutionRequestBody withImagePipelineArn(String imagePipelineArn) {
        this.imagePipelineArn = imagePipelineArn;
        return this;
    }
}