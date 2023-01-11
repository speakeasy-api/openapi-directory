package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateEnvironmentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateEnvironmentRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federationMode")
    public UpdateEnvironmentRequestBodyFederationModeEnum federationMode;
    public UpdateEnvironmentRequestBody withFederationMode(UpdateEnvironmentRequestBodyFederationModeEnum federationMode) {
        this.federationMode = federationMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federationParameters")
    public UpdateEnvironmentRequestBodyFederationParameters federationParameters;
    public UpdateEnvironmentRequestBody withFederationParameters(UpdateEnvironmentRequestBodyFederationParameters federationParameters) {
        this.federationParameters = federationParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateEnvironmentRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}