package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataReplicationInfo
 * Request data replication info.
**/
public class DataReplicationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataReplicationError")
    public DataReplicationError dataReplicationError;
    public DataReplicationInfo withDataReplicationError(DataReplicationError dataReplicationError) {
        this.dataReplicationError = dataReplicationError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataReplicationInitiation")
    public DataReplicationInitiation dataReplicationInitiation;
    public DataReplicationInfo withDataReplicationInitiation(DataReplicationInitiation dataReplicationInitiation) {
        this.dataReplicationInitiation = dataReplicationInitiation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataReplicationState")
    public DataReplicationStateEnum dataReplicationState;
    public DataReplicationInfo withDataReplicationState(DataReplicationStateEnum dataReplicationState) {
        this.dataReplicationState = dataReplicationState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etaDateTime")
    public String etaDateTime;
    public DataReplicationInfo withEtaDateTime(String etaDateTime) {
        this.etaDateTime = etaDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lagDuration")
    public String lagDuration;
    public DataReplicationInfo withLagDuration(String lagDuration) {
        this.lagDuration = lagDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicatedDisks")
    public DataReplicationInfoReplicatedDisk[] replicatedDisks;
    public DataReplicationInfo withReplicatedDisks(DataReplicationInfoReplicatedDisk[] replicatedDisks) {
        this.replicatedDisks = replicatedDisks;
        return this;
    }
}