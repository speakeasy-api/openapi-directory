package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FaultRootCauseEntity
 * A collection of segments and corresponding subsegments associated to a trace summary fault error.
**/
public class FaultRootCauseEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Exceptions")
    public RootCauseException[] exceptions;
    public FaultRootCauseEntity withExceptions(RootCauseException[] exceptions) {
        this.exceptions = exceptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public FaultRootCauseEntity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Remote")
    public Boolean remote;
    public FaultRootCauseEntity withRemote(Boolean remote) {
        this.remote = remote;
        return this;
    }
}