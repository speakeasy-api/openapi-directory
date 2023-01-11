package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteDistributionConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributionConfigurationArn")
    public String distributionConfigurationArn;
    public DeleteDistributionConfigurationResponse withDistributionConfigurationArn(String distributionConfigurationArn) {
        this.distributionConfigurationArn = distributionConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public DeleteDistributionConfigurationResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}