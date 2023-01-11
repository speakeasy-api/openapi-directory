package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteInterconnectRequest {
    @JsonProperty("interconnectId")
    public String interconnectId;
    public DeleteInterconnectRequest withInterconnectId(String interconnectId) {
        this.interconnectId = interconnectId;
        return this;
    }
}