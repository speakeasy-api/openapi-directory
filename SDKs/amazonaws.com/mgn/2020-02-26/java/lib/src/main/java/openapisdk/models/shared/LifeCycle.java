package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifeCycle
 * Lifecycle.
**/
public class LifeCycle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addedToServiceDateTime")
    public String addedToServiceDateTime;
    public LifeCycle withAddedToServiceDateTime(String addedToServiceDateTime) {
        this.addedToServiceDateTime = addedToServiceDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elapsedReplicationDuration")
    public String elapsedReplicationDuration;
    public LifeCycle withElapsedReplicationDuration(String elapsedReplicationDuration) {
        this.elapsedReplicationDuration = elapsedReplicationDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstByteDateTime")
    public String firstByteDateTime;
    public LifeCycle withFirstByteDateTime(String firstByteDateTime) {
        this.firstByteDateTime = firstByteDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastCutover")
    public LifeCycleLastCutover lastCutover;
    public LifeCycle withLastCutover(LifeCycleLastCutover lastCutover) {
        this.lastCutover = lastCutover;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSeenByServiceDateTime")
    public String lastSeenByServiceDateTime;
    public LifeCycle withLastSeenByServiceDateTime(String lastSeenByServiceDateTime) {
        this.lastSeenByServiceDateTime = lastSeenByServiceDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastTest")
    public LifeCycleLastTest lastTest;
    public LifeCycle withLastTest(LifeCycleLastTest lastTest) {
        this.lastTest = lastTest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public LifeCycleStateEnum state;
    public LifeCycle withState(LifeCycleStateEnum state) {
        this.state = state;
        return this;
    }
}