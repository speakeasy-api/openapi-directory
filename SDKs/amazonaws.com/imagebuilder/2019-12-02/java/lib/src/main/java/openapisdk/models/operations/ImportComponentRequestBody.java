package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportComponentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeDescription")
    public String changeDescription;
    public ImportComponentRequestBody withChangeDescription(String changeDescription) {
        this.changeDescription = changeDescription;
        return this;
    }
    @JsonProperty("clientToken")
    public String clientToken;
    public ImportComponentRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public ImportComponentRequestBody withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ImportComponentRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("format")
    public ImportComponentRequestBodyFormatEnum format;
    public ImportComponentRequestBody withFormat(ImportComponentRequestBodyFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyId")
    public String kmsKeyId;
    public ImportComponentRequestBody withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ImportComponentRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("platform")
    public ImportComponentRequestBodyPlatformEnum platform;
    public ImportComponentRequestBody withPlatform(ImportComponentRequestBodyPlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonProperty("semanticVersion")
    public String semanticVersion;
    public ImportComponentRequestBody withSemanticVersion(String semanticVersion) {
        this.semanticVersion = semanticVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public ImportComponentRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public ImportComponentRequestBodyTypeEnum type;
    public ImportComponentRequestBody withType(ImportComponentRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ImportComponentRequestBody withUri(String uri) {
        this.uri = uri;
        return this;
    }
}