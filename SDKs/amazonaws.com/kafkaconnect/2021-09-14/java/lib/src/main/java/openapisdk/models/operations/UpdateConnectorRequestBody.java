package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateConnectorRequestBody {
    @JsonProperty("capacity")
    public UpdateConnectorRequestBodyCapacity capacity;
    public UpdateConnectorRequestBody withCapacity(UpdateConnectorRequestBodyCapacity capacity) {
        this.capacity = capacity;
        return this;
    }
}