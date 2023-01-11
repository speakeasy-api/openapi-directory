package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDistributionConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributionConfiguration")
    public DistributionConfiguration distributionConfiguration;
    public GetDistributionConfigurationResponse withDistributionConfiguration(DistributionConfiguration distributionConfiguration) {
        this.distributionConfiguration = distributionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GetDistributionConfigurationResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}