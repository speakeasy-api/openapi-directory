package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataReplicationInitiation
 * Data replication initiation.
**/
public class DataReplicationInitiation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextAttemptDateTime")
    public String nextAttemptDateTime;
    public DataReplicationInitiation withNextAttemptDateTime(String nextAttemptDateTime) {
        this.nextAttemptDateTime = nextAttemptDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDateTime")
    public String startDateTime;
    public DataReplicationInitiation withStartDateTime(String startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public DataReplicationInitiationStep[] steps;
    public DataReplicationInitiation withSteps(DataReplicationInitiationStep[] steps) {
        this.steps = steps;
        return this;
    }
}