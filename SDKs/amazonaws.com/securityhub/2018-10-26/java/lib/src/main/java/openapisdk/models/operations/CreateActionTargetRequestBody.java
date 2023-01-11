package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateActionTargetRequestBody {
    @JsonProperty("Description")
    public String description;
    public CreateActionTargetRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public CreateActionTargetRequestBody withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateActionTargetRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}