package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DestinationRead {
    @JsonProperty("connectionConfiguration")
    public Object connectionConfiguration;
    public DestinationRead withConnectionConfiguration(Object connectionConfiguration) {
        this.connectionConfiguration = connectionConfiguration;
        return this;
    }
    @JsonProperty("destinationDefinitionId")
    public String destinationDefinitionId;
    public DestinationRead withDestinationDefinitionId(String destinationDefinitionId) {
        this.destinationDefinitionId = destinationDefinitionId;
        return this;
    }
    @JsonProperty("destinationId")
    public String destinationId;
    public DestinationRead withDestinationId(String destinationId) {
        this.destinationId = destinationId;
        return this;
    }
    @JsonProperty("destinationName")
    public String destinationName;
    public DestinationRead withDestinationName(String destinationName) {
        this.destinationName = destinationName;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DestinationRead withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("workspaceId")
    public String workspaceId;
    public DestinationRead withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}