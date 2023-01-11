package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetHitRequest {
    @JsonProperty("HITId")
    public String hitId;
    public GetHitRequest withHitId(String hitId) {
        this.hitId = hitId;
        return this;
    }
}