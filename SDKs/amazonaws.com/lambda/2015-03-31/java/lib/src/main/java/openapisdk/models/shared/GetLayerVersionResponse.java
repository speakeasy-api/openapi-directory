package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLayerVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompatibleRuntimes")
    public RuntimeEnum[] compatibleRuntimes;
    public GetLayerVersionResponse withCompatibleRuntimes(RuntimeEnum[] compatibleRuntimes) {
        this.compatibleRuntimes = compatibleRuntimes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Content")
    public LayerVersionContentOutput content;
    public GetLayerVersionResponse withContent(LayerVersionContentOutput content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedDate")
    public String createdDate;
    public GetLayerVersionResponse withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public GetLayerVersionResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LayerArn")
    public String layerArn;
    public GetLayerVersionResponse withLayerArn(String layerArn) {
        this.layerArn = layerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LayerVersionArn")
    public String layerVersionArn;
    public GetLayerVersionResponse withLayerVersionArn(String layerVersionArn) {
        this.layerVersionArn = layerVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseInfo")
    public String licenseInfo;
    public GetLayerVersionResponse withLicenseInfo(String licenseInfo) {
        this.licenseInfo = licenseInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public Long version;
    public GetLayerVersionResponse withVersion(Long version) {
        this.version = version;
        return this;
    }
}