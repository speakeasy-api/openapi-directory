package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateImageRequestBody {
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateImageRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerRecipeArn")
    public String containerRecipeArn;
    public CreateImageRequestBody withContainerRecipeArn(String containerRecipeArn) {
        this.containerRecipeArn = containerRecipeArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributionConfigurationArn")
    public String distributionConfigurationArn;
    public CreateImageRequestBody withDistributionConfigurationArn(String distributionConfigurationArn) {
        this.distributionConfigurationArn = distributionConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enhancedImageMetadataEnabled")
    public Boolean enhancedImageMetadataEnabled;
    public CreateImageRequestBody withEnhancedImageMetadataEnabled(Boolean enhancedImageMetadataEnabled) {
        this.enhancedImageMetadataEnabled = enhancedImageMetadataEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageRecipeArn")
    public String imageRecipeArn;
    public CreateImageRequestBody withImageRecipeArn(String imageRecipeArn) {
        this.imageRecipeArn = imageRecipeArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageTestsConfiguration")
    public CreateImageRequestBodyImageTestsConfiguration imageTestsConfiguration;
    public CreateImageRequestBody withImageTestsConfiguration(CreateImageRequestBodyImageTestsConfiguration imageTestsConfiguration) {
        this.imageTestsConfiguration = imageTestsConfiguration;
        return this;
    }
    @JsonProperty("infrastructureConfigurationArn")
    public String infrastructureConfigurationArn;
    public CreateImageRequestBody withInfrastructureConfigurationArn(String infrastructureConfigurationArn) {
        this.infrastructureConfigurationArn = infrastructureConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateImageRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}