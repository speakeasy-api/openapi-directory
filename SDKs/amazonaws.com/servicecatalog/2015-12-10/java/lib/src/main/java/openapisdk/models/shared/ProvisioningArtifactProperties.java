package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisioningArtifactProperties
 * Information about a provisioning artifact (also known as a version) for a product.
**/
public class ProvisioningArtifactProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public ProvisioningArtifactProperties withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisableTemplateValidation")
    public Boolean disableTemplateValidation;
    public ProvisioningArtifactProperties withDisableTemplateValidation(Boolean disableTemplateValidation) {
        this.disableTemplateValidation = disableTemplateValidation;
        return this;
    }
    @JsonProperty("Info")
    public java.util.Map<String, String> info;
    public ProvisioningArtifactProperties withInfo(java.util.Map<String, String> info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ProvisioningArtifactProperties withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public ProvisioningArtifactTypeEnum type;
    public ProvisioningArtifactProperties withType(ProvisioningArtifactTypeEnum type) {
        this.type = type;
        return this;
    }
}