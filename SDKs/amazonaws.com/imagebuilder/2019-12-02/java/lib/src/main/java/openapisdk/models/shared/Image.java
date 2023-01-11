package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Image
 * An Image Builder image. You must specify exactly one recipe for the image – either a container recipe (<code>containerRecipe</code>), which creates a container image, or an image recipe (<code>imageRecipe</code>), which creates an AMI.
**/
public class Image {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public Image withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerRecipe")
    public ContainerRecipe containerRecipe;
    public Image withContainerRecipe(ContainerRecipe containerRecipe) {
        this.containerRecipe = containerRecipe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateCreated")
    public String dateCreated;
    public Image withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributionConfiguration")
    public DistributionConfiguration distributionConfiguration;
    public Image withDistributionConfiguration(DistributionConfiguration distributionConfiguration) {
        this.distributionConfiguration = distributionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enhancedImageMetadataEnabled")
    public Boolean enhancedImageMetadataEnabled;
    public Image withEnhancedImageMetadataEnabled(Boolean enhancedImageMetadataEnabled) {
        this.enhancedImageMetadataEnabled = enhancedImageMetadataEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageRecipe")
    public ImageRecipe imageRecipe;
    public Image withImageRecipe(ImageRecipe imageRecipe) {
        this.imageRecipe = imageRecipe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageTestsConfiguration")
    public ImageTestsConfiguration imageTestsConfiguration;
    public Image withImageTestsConfiguration(ImageTestsConfiguration imageTestsConfiguration) {
        this.imageTestsConfiguration = imageTestsConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infrastructureConfiguration")
    public InfrastructureConfiguration infrastructureConfiguration;
    public Image withInfrastructureConfiguration(InfrastructureConfiguration infrastructureConfiguration) {
        this.infrastructureConfiguration = infrastructureConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Image withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osVersion")
    public String osVersion;
    public Image withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputResources")
    public OutputResources outputResources;
    public Image withOutputResources(OutputResources outputResources) {
        this.outputResources = outputResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public PlatformEnum platform;
    public Image withPlatform(PlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourcePipelineArn")
    public String sourcePipelineArn;
    public Image withSourcePipelineArn(String sourcePipelineArn) {
        this.sourcePipelineArn = sourcePipelineArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourcePipelineName")
    public String sourcePipelineName;
    public Image withSourcePipelineName(String sourcePipelineName) {
        this.sourcePipelineName = sourcePipelineName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ImageState state;
    public Image withState(ImageState state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public Image withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ImageTypeEnum type;
    public Image withType(ImageTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Image withVersion(String version) {
        this.version = version;
        return this;
    }
}