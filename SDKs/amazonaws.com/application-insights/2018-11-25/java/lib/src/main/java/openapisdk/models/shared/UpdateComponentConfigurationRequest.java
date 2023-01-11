package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateComponentConfigurationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComponentConfiguration")
    public String componentConfiguration;
    public UpdateComponentConfigurationRequest withComponentConfiguration(String componentConfiguration) {
        this.componentConfiguration = componentConfiguration;
        return this;
    }
    @JsonProperty("ComponentName")
    public String componentName;
    public UpdateComponentConfigurationRequest withComponentName(String componentName) {
        this.componentName = componentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Monitor")
    public Boolean monitor;
    public UpdateComponentConfigurationRequest withMonitor(Boolean monitor) {
        this.monitor = monitor;
        return this;
    }
    @JsonProperty("ResourceGroupName")
    public String resourceGroupName;
    public UpdateComponentConfigurationRequest withResourceGroupName(String resourceGroupName) {
        this.resourceGroupName = resourceGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tier")
    public TierEnum tier;
    public UpdateComponentConfigurationRequest withTier(TierEnum tier) {
        this.tier = tier;
        return this;
    }
}