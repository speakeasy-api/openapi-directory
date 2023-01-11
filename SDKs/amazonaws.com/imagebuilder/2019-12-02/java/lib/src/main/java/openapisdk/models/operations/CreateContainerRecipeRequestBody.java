package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateContainerRecipeRequestBody {
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateContainerRecipeRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("components")
    public openapisdk.models.shared.ComponentConfiguration[] components;
    public CreateContainerRecipeRequestBody withComponents(openapisdk.models.shared.ComponentConfiguration[] components) {
        this.components = components;
        return this;
    }
    @JsonProperty("containerType")
    public CreateContainerRecipeRequestBodyContainerTypeEnum containerType;
    public CreateContainerRecipeRequestBody withContainerType(CreateContainerRecipeRequestBodyContainerTypeEnum containerType) {
        this.containerType = containerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateContainerRecipeRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerfileTemplateData")
    public String dockerfileTemplateData;
    public CreateContainerRecipeRequestBody withDockerfileTemplateData(String dockerfileTemplateData) {
        this.dockerfileTemplateData = dockerfileTemplateData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerfileTemplateUri")
    public String dockerfileTemplateUri;
    public CreateContainerRecipeRequestBody withDockerfileTemplateUri(String dockerfileTemplateUri) {
        this.dockerfileTemplateUri = dockerfileTemplateUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageOsVersionOverride")
    public String imageOsVersionOverride;
    public CreateContainerRecipeRequestBody withImageOsVersionOverride(String imageOsVersionOverride) {
        this.imageOsVersionOverride = imageOsVersionOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceConfiguration")
    public CreateContainerRecipeRequestBodyInstanceConfiguration instanceConfiguration;
    public CreateContainerRecipeRequestBody withInstanceConfiguration(CreateContainerRecipeRequestBodyInstanceConfiguration instanceConfiguration) {
        this.instanceConfiguration = instanceConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyId")
    public String kmsKeyId;
    public CreateContainerRecipeRequestBody withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateContainerRecipeRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("parentImage")
    public String parentImage;
    public CreateContainerRecipeRequestBody withParentImage(String parentImage) {
        this.parentImage = parentImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformOverride")
    public CreateContainerRecipeRequestBodyPlatformOverrideEnum platformOverride;
    public CreateContainerRecipeRequestBody withPlatformOverride(CreateContainerRecipeRequestBodyPlatformOverrideEnum platformOverride) {
        this.platformOverride = platformOverride;
        return this;
    }
    @JsonProperty("semanticVersion")
    public String semanticVersion;
    public CreateContainerRecipeRequestBody withSemanticVersion(String semanticVersion) {
        this.semanticVersion = semanticVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateContainerRecipeRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("targetRepository")
    public CreateContainerRecipeRequestBodyTargetRepository targetRepository;
    public CreateContainerRecipeRequestBody withTargetRepository(CreateContainerRecipeRequestBodyTargetRepository targetRepository) {
        this.targetRepository = targetRepository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workingDirectory")
    public String workingDirectory;
    public CreateContainerRecipeRequestBody withWorkingDirectory(String workingDirectory) {
        this.workingDirectory = workingDirectory;
        return this;
    }
}