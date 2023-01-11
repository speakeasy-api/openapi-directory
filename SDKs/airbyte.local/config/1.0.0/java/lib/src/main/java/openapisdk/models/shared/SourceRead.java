package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SourceRead {
    @JsonProperty("connectionConfiguration")
    public Object connectionConfiguration;
    public SourceRead withConnectionConfiguration(Object connectionConfiguration) {
        this.connectionConfiguration = connectionConfiguration;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public SourceRead withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("sourceDefinitionId")
    public String sourceDefinitionId;
    public SourceRead withSourceDefinitionId(String sourceDefinitionId) {
        this.sourceDefinitionId = sourceDefinitionId;
        return this;
    }
    @JsonProperty("sourceId")
    public String sourceId;
    public SourceRead withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonProperty("sourceName")
    public String sourceName;
    public SourceRead withSourceName(String sourceName) {
        this.sourceName = sourceName;
        return this;
    }
    @JsonProperty("workspaceId")
    public String workspaceId;
    public SourceRead withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}