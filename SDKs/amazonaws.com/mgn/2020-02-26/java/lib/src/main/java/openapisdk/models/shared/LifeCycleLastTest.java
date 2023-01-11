package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifeCycleLastTest
 * Lifecycle last Test.
**/
public class LifeCycleLastTest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finalized")
    public LifeCycleLastTestFinalized finalized;
    public LifeCycleLastTest withFinalized(LifeCycleLastTestFinalized finalized) {
        this.finalized = finalized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initiated")
    public LifeCycleLastTestInitiated initiated;
    public LifeCycleLastTest withInitiated(LifeCycleLastTestInitiated initiated) {
        this.initiated = initiated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reverted")
    public LifeCycleLastTestReverted reverted;
    public LifeCycleLastTest withReverted(LifeCycleLastTestReverted reverted) {
        this.reverted = reverted;
        return this;
    }
}