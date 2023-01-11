package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContainerRecipe
 * A container recipe.
**/
public class ContainerRecipe {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public ContainerRecipe withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("components")
    public ComponentConfiguration[] components;
    public ContainerRecipe withComponents(ComponentConfiguration[] components) {
        this.components = components;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerType")
    public ContainerTypeEnum containerType;
    public ContainerRecipe withContainerType(ContainerTypeEnum containerType) {
        this.containerType = containerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateCreated")
    public String dateCreated;
    public ContainerRecipe withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ContainerRecipe withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerfileTemplateData")
    public String dockerfileTemplateData;
    public ContainerRecipe withDockerfileTemplateData(String dockerfileTemplateData) {
        this.dockerfileTemplateData = dockerfileTemplateData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encrypted")
    public Boolean encrypted;
    public ContainerRecipe withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceConfiguration")
    public InstanceConfiguration instanceConfiguration;
    public ContainerRecipe withInstanceConfiguration(InstanceConfiguration instanceConfiguration) {
        this.instanceConfiguration = instanceConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyId")
    public String kmsKeyId;
    public ContainerRecipe withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ContainerRecipe withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public ContainerRecipe withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentImage")
    public String parentImage;
    public ContainerRecipe withParentImage(String parentImage) {
        this.parentImage = parentImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public PlatformEnum platform;
    public ContainerRecipe withPlatform(PlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public ContainerRecipe withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetRepository")
    public TargetContainerRepository targetRepository;
    public ContainerRecipe withTargetRepository(TargetContainerRepository targetRepository) {
        this.targetRepository = targetRepository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public ContainerRecipe withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workingDirectory")
    public String workingDirectory;
    public ContainerRecipe withWorkingDirectory(String workingDirectory) {
        this.workingDirectory = workingDirectory;
        return this;
    }
}