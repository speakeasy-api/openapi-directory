package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateComponentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeDescription")
    public String changeDescription;
    public CreateComponentRequestBody withChangeDescription(String changeDescription) {
        this.changeDescription = changeDescription;
        return this;
    }
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateComponentRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public CreateComponentRequestBody withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateComponentRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyId")
    public String kmsKeyId;
    public CreateComponentRequestBody withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateComponentRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("platform")
    public CreateComponentRequestBodyPlatformEnum platform;
    public CreateComponentRequestBody withPlatform(CreateComponentRequestBodyPlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonProperty("semanticVersion")
    public String semanticVersion;
    public CreateComponentRequestBody withSemanticVersion(String semanticVersion) {
        this.semanticVersion = semanticVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedOsVersions")
    public String[] supportedOsVersions;
    public CreateComponentRequestBody withSupportedOsVersions(String[] supportedOsVersions) {
        this.supportedOsVersions = supportedOsVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateComponentRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public CreateComponentRequestBody withUri(String uri) {
        this.uri = uri;
        return this;
    }
}