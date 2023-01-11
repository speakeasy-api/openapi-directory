package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScalableTargetAction
 * Represents the minimum and maximum capacity for a scheduled action.
**/
public class ScalableTargetAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxCapacity")
    public Long maxCapacity;
    public ScalableTargetAction withMaxCapacity(Long maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinCapacity")
    public Long minCapacity;
    public ScalableTargetAction withMinCapacity(Long minCapacity) {
        this.minCapacity = minCapacity;
        return this;
    }
}