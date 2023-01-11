package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateProjectRequestBodyInput {
    @JsonProperty("description")
    public String description;
    public UpdateProjectRequestBodyInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("environment")
    public UpdateProjectRequestBodyEnvironmentEnum environment;
    public UpdateProjectRequestBodyInput withEnvironment(UpdateProjectRequestBodyEnvironmentEnum environment) {
        this.environment = environment;
        return this;
    }
    @JsonProperty("is_default")
    public Boolean isDefault;
    public UpdateProjectRequestBodyInput withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateProjectRequestBodyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("purpose")
    public String purpose;
    public UpdateProjectRequestBodyInput withPurpose(String purpose) {
        this.purpose = purpose;
        return this;
    }
}