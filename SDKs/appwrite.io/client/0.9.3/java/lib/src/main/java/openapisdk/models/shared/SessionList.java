package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SessionList
 * Sessions List
**/
public class SessionList {
    @JsonProperty("sessions")
    public Session[] sessions;
    public SessionList withSessions(Session[] sessions) {
        this.sessions = sessions;
        return this;
    }
    @JsonProperty("sum")
    public Integer sum;
    public SessionList withSum(Integer sum) {
        this.sum = sum;
        return this;
    }
}