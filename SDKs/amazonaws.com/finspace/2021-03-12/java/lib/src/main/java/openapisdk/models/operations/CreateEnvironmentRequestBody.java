package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEnvironmentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateEnvironmentRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federationMode")
    public CreateEnvironmentRequestBodyFederationModeEnum federationMode;
    public CreateEnvironmentRequestBody withFederationMode(CreateEnvironmentRequestBodyFederationModeEnum federationMode) {
        this.federationMode = federationMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federationParameters")
    public CreateEnvironmentRequestBodyFederationParameters federationParameters;
    public CreateEnvironmentRequestBody withFederationParameters(CreateEnvironmentRequestBodyFederationParameters federationParameters) {
        this.federationParameters = federationParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyId")
    public String kmsKeyId;
    public CreateEnvironmentRequestBody withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateEnvironmentRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateEnvironmentRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}