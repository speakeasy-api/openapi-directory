package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateImagePipelineRequestBody {
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateImagePipelineRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerRecipeArn")
    public String containerRecipeArn;
    public CreateImagePipelineRequestBody withContainerRecipeArn(String containerRecipeArn) {
        this.containerRecipeArn = containerRecipeArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateImagePipelineRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributionConfigurationArn")
    public String distributionConfigurationArn;
    public CreateImagePipelineRequestBody withDistributionConfigurationArn(String distributionConfigurationArn) {
        this.distributionConfigurationArn = distributionConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enhancedImageMetadataEnabled")
    public Boolean enhancedImageMetadataEnabled;
    public CreateImagePipelineRequestBody withEnhancedImageMetadataEnabled(Boolean enhancedImageMetadataEnabled) {
        this.enhancedImageMetadataEnabled = enhancedImageMetadataEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageRecipeArn")
    public String imageRecipeArn;
    public CreateImagePipelineRequestBody withImageRecipeArn(String imageRecipeArn) {
        this.imageRecipeArn = imageRecipeArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageTestsConfiguration")
    public CreateImagePipelineRequestBodyImageTestsConfiguration imageTestsConfiguration;
    public CreateImagePipelineRequestBody withImageTestsConfiguration(CreateImagePipelineRequestBodyImageTestsConfiguration imageTestsConfiguration) {
        this.imageTestsConfiguration = imageTestsConfiguration;
        return this;
    }
    @JsonProperty("infrastructureConfigurationArn")
    public String infrastructureConfigurationArn;
    public CreateImagePipelineRequestBody withInfrastructureConfigurationArn(String infrastructureConfigurationArn) {
        this.infrastructureConfigurationArn = infrastructureConfigurationArn;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateImagePipelineRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public CreateImagePipelineRequestBodySchedule schedule;
    public CreateImagePipelineRequestBody withSchedule(CreateImagePipelineRequestBodySchedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CreateImagePipelineRequestBodyStatusEnum status;
    public CreateImagePipelineRequestBody withStatus(CreateImagePipelineRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateImagePipelineRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}