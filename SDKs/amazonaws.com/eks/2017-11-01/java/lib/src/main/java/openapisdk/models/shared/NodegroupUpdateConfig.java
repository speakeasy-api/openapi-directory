package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodegroupUpdateConfig
 * The node group update configuration.
**/
public class NodegroupUpdateConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxUnavailable")
    public Long maxUnavailable;
    public NodegroupUpdateConfig withMaxUnavailable(Long maxUnavailable) {
        this.maxUnavailable = maxUnavailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxUnavailablePercentage")
    public Long maxUnavailablePercentage;
    public NodegroupUpdateConfig withMaxUnavailablePercentage(Long maxUnavailablePercentage) {
        this.maxUnavailablePercentage = maxUnavailablePercentage;
        return this;
    }
}