package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDistributionConfigurationRequestBody {
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateDistributionConfigurationRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateDistributionConfigurationRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("distributions")
    public openapisdk.models.shared.Distribution[] distributions;
    public CreateDistributionConfigurationRequestBody withDistributions(openapisdk.models.shared.Distribution[] distributions) {
        this.distributions = distributions;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateDistributionConfigurationRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateDistributionConfigurationRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}