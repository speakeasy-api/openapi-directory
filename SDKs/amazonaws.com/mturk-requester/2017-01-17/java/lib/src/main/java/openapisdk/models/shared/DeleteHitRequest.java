package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteHitRequest {
    @JsonProperty("HITId")
    public String hitId;
    public DeleteHitRequest withHitId(String hitId) {
        this.hitId = hitId;
        return this;
    }
}