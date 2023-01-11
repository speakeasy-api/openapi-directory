package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteImageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageBuildVersionArn")
    public String imageBuildVersionArn;
    public DeleteImageResponse withImageBuildVersionArn(String imageBuildVersionArn) {
        this.imageBuildVersionArn = imageBuildVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public DeleteImageResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}