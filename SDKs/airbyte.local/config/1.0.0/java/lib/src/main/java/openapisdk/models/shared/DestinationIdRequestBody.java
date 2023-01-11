package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DestinationIdRequestBody {
    @JsonProperty("destinationId")
    public String destinationId;
    public DestinationIdRequestBody withDestinationId(String destinationId) {
        this.destinationId = destinationId;
        return this;
    }
}