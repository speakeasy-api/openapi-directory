package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRelationalDatabaseLogStreamsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logStreams")
    public String[] logStreams;
    public GetRelationalDatabaseLogStreamsResult withLogStreams(String[] logStreams) {
        this.logStreams = logStreams;
        return this;
    }
}