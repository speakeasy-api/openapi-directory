package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AdminListUserAuthEventsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthEvents")
    public AuthEventType[] authEvents;
    public AdminListUserAuthEventsResponse withAuthEvents(AuthEventType[] authEvents) {
        this.authEvents = authEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public AdminListUserAuthEventsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}