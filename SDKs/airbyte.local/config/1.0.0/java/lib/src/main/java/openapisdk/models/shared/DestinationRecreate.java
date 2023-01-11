package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DestinationRecreate {
    @JsonProperty("connectionConfiguration")
    public Object connectionConfiguration;
    public DestinationRecreate withConnectionConfiguration(Object connectionConfiguration) {
        this.connectionConfiguration = connectionConfiguration;
        return this;
    }
    @JsonProperty("destinationDefinitionId")
    public String destinationDefinitionId;
    public DestinationRecreate withDestinationDefinitionId(String destinationDefinitionId) {
        this.destinationDefinitionId = destinationDefinitionId;
        return this;
    }
    @JsonProperty("destinationId")
    public String destinationId;
    public DestinationRecreate withDestinationId(String destinationId) {
        this.destinationId = destinationId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DestinationRecreate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("workspaceId")
    public String workspaceId;
    public DestinationRecreate withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}