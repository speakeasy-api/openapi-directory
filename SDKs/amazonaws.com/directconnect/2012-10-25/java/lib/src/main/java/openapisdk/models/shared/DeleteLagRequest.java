package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteLagRequest {
    @JsonProperty("lagId")
    public String lagId;
    public DeleteLagRequest withLagId(String lagId) {
        this.lagId = lagId;
        return this;
    }
}