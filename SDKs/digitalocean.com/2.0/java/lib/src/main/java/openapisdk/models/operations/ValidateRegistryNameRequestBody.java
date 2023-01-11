package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ValidateRegistryNameRequestBody {
    @JsonProperty("name")
    public String name;
    public ValidateRegistryNameRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}