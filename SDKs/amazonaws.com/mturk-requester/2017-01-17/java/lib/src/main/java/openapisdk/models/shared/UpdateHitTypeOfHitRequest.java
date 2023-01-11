package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateHitTypeOfHitRequest {
    @JsonProperty("HITId")
    public String hitId;
    public UpdateHitTypeOfHitRequest withHitId(String hitId) {
        this.hitId = hitId;
        return this;
    }
    @JsonProperty("HITTypeId")
    public String hitTypeId;
    public UpdateHitTypeOfHitRequest withHitTypeId(String hitTypeId) {
        this.hitTypeId = hitTypeId;
        return this;
    }
}