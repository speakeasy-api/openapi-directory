package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeComponentConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComponentConfiguration")
    public String componentConfiguration;
    public DescribeComponentConfigurationResponse withComponentConfiguration(String componentConfiguration) {
        this.componentConfiguration = componentConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Monitor")
    public Boolean monitor;
    public DescribeComponentConfigurationResponse withMonitor(Boolean monitor) {
        this.monitor = monitor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tier")
    public TierEnum tier;
    public DescribeComponentConfigurationResponse withTier(TierEnum tier) {
        this.tier = tier;
        return this;
    }
}