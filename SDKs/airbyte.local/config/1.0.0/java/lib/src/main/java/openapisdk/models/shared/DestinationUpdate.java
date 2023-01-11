package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DestinationUpdate {
    @JsonProperty("connectionConfiguration")
    public Object connectionConfiguration;
    public DestinationUpdate withConnectionConfiguration(Object connectionConfiguration) {
        this.connectionConfiguration = connectionConfiguration;
        return this;
    }
    @JsonProperty("destinationId")
    public String destinationId;
    public DestinationUpdate withDestinationId(String destinationId) {
        this.destinationId = destinationId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DestinationUpdate withName(String name) {
        this.name = name;
        return this;
    }
}