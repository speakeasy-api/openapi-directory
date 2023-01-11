package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeLanguageModelRequest {
    @JsonProperty("ModelName")
    public String modelName;
    public DescribeLanguageModelRequest withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
}