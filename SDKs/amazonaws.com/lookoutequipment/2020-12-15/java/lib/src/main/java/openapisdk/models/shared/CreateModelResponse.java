package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateModelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelArn")
    public String modelArn;
    public CreateModelResponse withModelArn(String modelArn) {
        this.modelArn = modelArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ModelStatusEnum status;
    public CreateModelResponse withStatus(ModelStatusEnum status) {
        this.status = status;
        return this;
    }
}