package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResponseTimeRootCauseEntity
 * A collection of segments and corresponding subsegments associated to a response time warning.
**/
public class ResponseTimeRootCauseEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Coverage")
    public Double coverage;
    public ResponseTimeRootCauseEntity withCoverage(Double coverage) {
        this.coverage = coverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ResponseTimeRootCauseEntity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Remote")
    public Boolean remote;
    public ResponseTimeRootCauseEntity withRemote(Boolean remote) {
        this.remote = remote;
        return this;
    }
}