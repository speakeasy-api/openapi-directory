package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProjectRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateProjectRequestBodyInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public CreateProjectRequestBodyEnvironmentEnum environment;
    public CreateProjectRequestBodyInput withEnvironment(CreateProjectRequestBodyEnvironmentEnum environment) {
        this.environment = environment;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateProjectRequestBodyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("purpose")
    public String purpose;
    public CreateProjectRequestBodyInput withPurpose(String purpose) {
        this.purpose = purpose;
        return this;
    }
}