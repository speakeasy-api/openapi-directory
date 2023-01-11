package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteLunaClientResponse {
    @JsonProperty("Status")
    public String status;
    public DeleteLunaClientResponse withStatus(String status) {
        this.status = status;
        return this;
    }
}