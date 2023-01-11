package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataReplicationInitiationStep
 * Data replication intiation step.
**/
public class DataReplicationInitiationStep {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public DataReplicationInitiationStepNameEnum name;
    public DataReplicationInitiationStep withName(DataReplicationInitiationStepNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DataReplicationInitiationStepStatusEnum status;
    public DataReplicationInitiationStep withStatus(DataReplicationInitiationStepStatusEnum status) {
        this.status = status;
        return this;
    }
}