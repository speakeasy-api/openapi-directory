package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateImagePipelineRequestBody {
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateImagePipelineRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerRecipeArn")
    public String containerRecipeArn;
    public UpdateImagePipelineRequestBody withContainerRecipeArn(String containerRecipeArn) {
        this.containerRecipeArn = containerRecipeArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateImagePipelineRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributionConfigurationArn")
    public String distributionConfigurationArn;
    public UpdateImagePipelineRequestBody withDistributionConfigurationArn(String distributionConfigurationArn) {
        this.distributionConfigurationArn = distributionConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enhancedImageMetadataEnabled")
    public Boolean enhancedImageMetadataEnabled;
    public UpdateImagePipelineRequestBody withEnhancedImageMetadataEnabled(Boolean enhancedImageMetadataEnabled) {
        this.enhancedImageMetadataEnabled = enhancedImageMetadataEnabled;
        return this;
    }
    @JsonProperty("imagePipelineArn")
    public String imagePipelineArn;
    public UpdateImagePipelineRequestBody withImagePipelineArn(String imagePipelineArn) {
        this.imagePipelineArn = imagePipelineArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageRecipeArn")
    public String imageRecipeArn;
    public UpdateImagePipelineRequestBody withImageRecipeArn(String imageRecipeArn) {
        this.imageRecipeArn = imageRecipeArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageTestsConfiguration")
    public UpdateImagePipelineRequestBodyImageTestsConfiguration imageTestsConfiguration;
    public UpdateImagePipelineRequestBody withImageTestsConfiguration(UpdateImagePipelineRequestBodyImageTestsConfiguration imageTestsConfiguration) {
        this.imageTestsConfiguration = imageTestsConfiguration;
        return this;
    }
    @JsonProperty("infrastructureConfigurationArn")
    public String infrastructureConfigurationArn;
    public UpdateImagePipelineRequestBody withInfrastructureConfigurationArn(String infrastructureConfigurationArn) {
        this.infrastructureConfigurationArn = infrastructureConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public UpdateImagePipelineRequestBodySchedule schedule;
    public UpdateImagePipelineRequestBody withSchedule(UpdateImagePipelineRequestBodySchedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public UpdateImagePipelineRequestBodyStatusEnum status;
    public UpdateImagePipelineRequestBody withStatus(UpdateImagePipelineRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}