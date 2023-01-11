package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NamedLogConfiguration {
    @JsonProperty("level")
    public LogLevelEnum level;
    public NamedLogConfiguration withLevel(LogLevelEnum level) {
        this.level = level;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public NamedLogConfiguration withName(String name) {
        this.name = name;
        return this;
    }
}