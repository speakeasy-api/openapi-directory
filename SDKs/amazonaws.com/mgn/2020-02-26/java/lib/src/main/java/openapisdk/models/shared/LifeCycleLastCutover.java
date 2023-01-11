package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifeCycleLastCutover
 * Lifecycle last Cutover .
**/
public class LifeCycleLastCutover {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finalized")
    public LifeCycleLastCutoverFinalized finalized;
    public LifeCycleLastCutover withFinalized(LifeCycleLastCutoverFinalized finalized) {
        this.finalized = finalized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initiated")
    public LifeCycleLastCutoverInitiated initiated;
    public LifeCycleLastCutover withInitiated(LifeCycleLastCutoverInitiated initiated) {
        this.initiated = initiated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reverted")
    public LifeCycleLastCutoverReverted reverted;
    public LifeCycleLastCutover withReverted(LifeCycleLastCutoverReverted reverted) {
        this.reverted = reverted;
        return this;
    }
}