package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeModelRequest {
    @JsonProperty("ModelName")
    public String modelName;
    public DescribeModelRequest withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
}