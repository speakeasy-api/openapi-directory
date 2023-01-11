package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LayerVersionsListItem
 * Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
**/
public class LayerVersionsListItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompatibleRuntimes")
    public RuntimeEnum[] compatibleRuntimes;
    public LayerVersionsListItem withCompatibleRuntimes(RuntimeEnum[] compatibleRuntimes) {
        this.compatibleRuntimes = compatibleRuntimes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedDate")
    public String createdDate;
    public LayerVersionsListItem withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public LayerVersionsListItem withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LayerVersionArn")
    public String layerVersionArn;
    public LayerVersionsListItem withLayerVersionArn(String layerVersionArn) {
        this.layerVersionArn = layerVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseInfo")
    public String licenseInfo;
    public LayerVersionsListItem withLicenseInfo(String licenseInfo) {
        this.licenseInfo = licenseInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public Long version;
    public LayerVersionsListItem withVersion(Long version) {
        this.version = version;
        return this;
    }
}