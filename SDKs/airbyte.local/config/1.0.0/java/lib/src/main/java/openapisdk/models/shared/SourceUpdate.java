package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SourceUpdate {
    @JsonProperty("connectionConfiguration")
    public Object connectionConfiguration;
    public SourceUpdate withConnectionConfiguration(Object connectionConfiguration) {
        this.connectionConfiguration = connectionConfiguration;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public SourceUpdate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("sourceId")
    public String sourceId;
    public SourceUpdate withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
}