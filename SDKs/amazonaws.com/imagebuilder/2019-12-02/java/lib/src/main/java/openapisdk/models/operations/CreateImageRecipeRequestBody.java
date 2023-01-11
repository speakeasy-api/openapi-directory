package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateImageRecipeRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalInstanceConfiguration")
    public CreateImageRecipeRequestBodyAdditionalInstanceConfiguration additionalInstanceConfiguration;
    public CreateImageRecipeRequestBody withAdditionalInstanceConfiguration(CreateImageRecipeRequestBodyAdditionalInstanceConfiguration additionalInstanceConfiguration) {
        this.additionalInstanceConfiguration = additionalInstanceConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockDeviceMappings")
    public openapisdk.models.shared.InstanceBlockDeviceMapping[] blockDeviceMappings;
    public CreateImageRecipeRequestBody withBlockDeviceMappings(openapisdk.models.shared.InstanceBlockDeviceMapping[] blockDeviceMappings) {
        this.blockDeviceMappings = blockDeviceMappings;
        return this;
    }
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateImageRecipeRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("components")
    public openapisdk.models.shared.ComponentConfiguration[] components;
    public CreateImageRecipeRequestBody withComponents(openapisdk.models.shared.ComponentConfiguration[] components) {
        this.components = components;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateImageRecipeRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateImageRecipeRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("parentImage")
    public String parentImage;
    public CreateImageRecipeRequestBody withParentImage(String parentImage) {
        this.parentImage = parentImage;
        return this;
    }
    @JsonProperty("semanticVersion")
    public String semanticVersion;
    public CreateImageRecipeRequestBody withSemanticVersion(String semanticVersion) {
        this.semanticVersion = semanticVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateImageRecipeRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workingDirectory")
    public String workingDirectory;
    public CreateImageRecipeRequestBody withWorkingDirectory(String workingDirectory) {
        this.workingDirectory = workingDirectory;
        return this;
    }
}