package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PublishLayerVersionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompatibleRuntimes")
    public openapisdk.models.shared.RuntimeEnum[] compatibleRuntimes;
    public PublishLayerVersionRequestBody withCompatibleRuntimes(openapisdk.models.shared.RuntimeEnum[] compatibleRuntimes) {
        this.compatibleRuntimes = compatibleRuntimes;
        return this;
    }
    @JsonProperty("Content")
    public PublishLayerVersionRequestBodyContent content;
    public PublishLayerVersionRequestBody withContent(PublishLayerVersionRequestBodyContent content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public PublishLayerVersionRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseInfo")
    public String licenseInfo;
    public PublishLayerVersionRequestBody withLicenseInfo(String licenseInfo) {
        this.licenseInfo = licenseInfo;
        return this;
    }
}