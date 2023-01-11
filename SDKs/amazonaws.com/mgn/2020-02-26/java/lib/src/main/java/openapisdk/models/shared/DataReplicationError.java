package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataReplicationError
 * Error in data replication.
**/
public class DataReplicationError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public DataReplicationErrorStringEnum error;
    public DataReplicationError withError(DataReplicationErrorStringEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawError")
    public String rawError;
    public DataReplicationError withRawError(String rawError) {
        this.rawError = rawError;
        return this;
    }
}