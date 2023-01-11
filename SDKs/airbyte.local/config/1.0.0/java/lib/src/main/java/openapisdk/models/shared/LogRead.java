package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LogRead {
    @JsonProperty("logLines")
    public String[] logLines;
    public LogRead withLogLines(String[] logLines) {
        this.logLines = logLines;
        return this;
    }
}