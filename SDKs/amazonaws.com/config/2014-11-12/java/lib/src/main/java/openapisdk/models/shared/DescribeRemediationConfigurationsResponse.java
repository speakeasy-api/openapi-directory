package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRemediationConfigurationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemediationConfigurations")
    public RemediationConfiguration[] remediationConfigurations;
    public DescribeRemediationConfigurationsResponse withRemediationConfigurations(RemediationConfiguration[] remediationConfigurations) {
        this.remediationConfigurations = remediationConfigurations;
        return this;
    }
}