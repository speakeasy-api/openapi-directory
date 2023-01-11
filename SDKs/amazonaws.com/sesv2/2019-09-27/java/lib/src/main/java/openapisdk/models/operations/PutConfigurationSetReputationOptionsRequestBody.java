package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutConfigurationSetReputationOptionsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReputationMetricsEnabled")
    public Boolean reputationMetricsEnabled;
    public PutConfigurationSetReputationOptionsRequestBody withReputationMetricsEnabled(Boolean reputationMetricsEnabled) {
        this.reputationMetricsEnabled = reputationMetricsEnabled;
        return this;
    }
}