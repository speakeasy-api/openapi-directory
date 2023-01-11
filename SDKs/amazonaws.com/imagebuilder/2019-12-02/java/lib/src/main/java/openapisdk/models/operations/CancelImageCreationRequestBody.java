package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelImageCreationRequestBody {
    @JsonProperty("clientToken")
    public String clientToken;
    public CancelImageCreationRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("imageBuildVersionArn")
    public String imageBuildVersionArn;
    public CancelImageCreationRequestBody withImageBuildVersionArn(String imageBuildVersionArn) {
        this.imageBuildVersionArn = imageBuildVersionArn;
        return this;
    }
}