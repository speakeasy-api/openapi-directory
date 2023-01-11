package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateDefaultProjectRequestBodyInput {
    @JsonProperty("description")
    public String description;
    public UpdateDefaultProjectRequestBodyInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("environment")
    public UpdateDefaultProjectRequestBodyEnvironmentEnum environment;
    public UpdateDefaultProjectRequestBodyInput withEnvironment(UpdateDefaultProjectRequestBodyEnvironmentEnum environment) {
        this.environment = environment;
        return this;
    }
    @JsonProperty("is_default")
    public Boolean isDefault;
    public UpdateDefaultProjectRequestBodyInput withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateDefaultProjectRequestBodyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("purpose")
    public String purpose;
    public UpdateDefaultProjectRequestBodyInput withPurpose(String purpose) {
        this.purpose = purpose;
        return this;
    }
}