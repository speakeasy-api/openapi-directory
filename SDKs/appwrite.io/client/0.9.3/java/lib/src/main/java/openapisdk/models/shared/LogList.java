package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LogList
 * Logs List
**/
public class LogList {
    @JsonProperty("logs")
    public Log[] logs;
    public LogList withLogs(Log[] logs) {
        this.logs = logs;
        return this;
    }
}