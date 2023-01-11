package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeConfigurationsRequest {
    @JsonProperty("configurationIds")
    public String[] configurationIds;
    public DescribeConfigurationsRequest withConfigurationIds(String[] configurationIds) {
        this.configurationIds = configurationIds;
        return this;
    }
}