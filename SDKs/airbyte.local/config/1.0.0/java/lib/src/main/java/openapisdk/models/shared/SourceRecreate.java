package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SourceRecreate {
    @JsonProperty("connectionConfiguration")
    public Object connectionConfiguration;
    public SourceRecreate withConnectionConfiguration(Object connectionConfiguration) {
        this.connectionConfiguration = connectionConfiguration;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public SourceRecreate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("sourceDefinitionId")
    public String sourceDefinitionId;
    public SourceRecreate withSourceDefinitionId(String sourceDefinitionId) {
        this.sourceDefinitionId = sourceDefinitionId;
        return this;
    }
    @JsonProperty("sourceId")
    public String sourceId;
    public SourceRecreate withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonProperty("workspaceId")
    public String workspaceId;
    public SourceRecreate withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}