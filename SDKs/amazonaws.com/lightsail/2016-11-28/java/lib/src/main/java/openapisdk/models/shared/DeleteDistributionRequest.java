package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteDistributionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributionName")
    public String distributionName;
    public DeleteDistributionRequest withDistributionName(String distributionName) {
        this.distributionName = distributionName;
        return this;
    }
}