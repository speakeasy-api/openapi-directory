package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDestinationRequest {
    @JsonProperty("destinationName")
    public String destinationName;
    public DeleteDestinationRequest withDestinationName(String destinationName) {
        this.destinationName = destinationName;
        return this;
    }
}