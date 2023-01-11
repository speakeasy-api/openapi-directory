package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorRootCauseEntity
 * A collection of segments and corresponding subsegments associated to a trace summary error.
**/
public class ErrorRootCauseEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Exceptions")
    public RootCauseException[] exceptions;
    public ErrorRootCauseEntity withExceptions(RootCauseException[] exceptions) {
        this.exceptions = exceptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ErrorRootCauseEntity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Remote")
    public Boolean remote;
    public ErrorRootCauseEntity withRemote(Boolean remote) {
        this.remote = remote;
        return this;
    }
}