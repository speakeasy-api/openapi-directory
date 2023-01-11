package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AttemptInfoRead {
    @JsonProperty("attempt")
    public AttemptRead attempt;
    public AttemptInfoRead withAttempt(AttemptRead attempt) {
        this.attempt = attempt;
        return this;
    }
    @JsonProperty("logs")
    public LogRead logs;
    public AttemptInfoRead withLogs(LogRead logs) {
        this.logs = logs;
        return this;
    }
}