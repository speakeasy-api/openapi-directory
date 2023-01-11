package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDistributionConfigurationRequestBody {
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateDistributionConfigurationRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateDistributionConfigurationRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("distributionConfigurationArn")
    public String distributionConfigurationArn;
    public UpdateDistributionConfigurationRequestBody withDistributionConfigurationArn(String distributionConfigurationArn) {
        this.distributionConfigurationArn = distributionConfigurationArn;
        return this;
    }
    @JsonProperty("distributions")
    public openapisdk.models.shared.Distribution[] distributions;
    public UpdateDistributionConfigurationRequestBody withDistributions(openapisdk.models.shared.Distribution[] distributions) {
        this.distributions = distributions;
        return this;
    }
}