package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRelationalDatabaseLogEventsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextBackwardToken")
    public String nextBackwardToken;
    public GetRelationalDatabaseLogEventsResult withNextBackwardToken(String nextBackwardToken) {
        this.nextBackwardToken = nextBackwardToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextForwardToken")
    public String nextForwardToken;
    public GetRelationalDatabaseLogEventsResult withNextForwardToken(String nextForwardToken) {
        this.nextForwardToken = nextForwardToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceLogEvents")
    public LogEvent[] resourceLogEvents;
    public GetRelationalDatabaseLogEventsResult withResourceLogEvents(LogEvent[] resourceLogEvents) {
        this.resourceLogEvents = resourceLogEvents;
        return this;
    }
}