package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateHitReviewStatusRequest {
    @JsonProperty("HITId")
    public String hitId;
    public UpdateHitReviewStatusRequest withHitId(String hitId) {
        this.hitId = hitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Revert")
    public Boolean revert;
    public UpdateHitReviewStatusRequest withRevert(Boolean revert) {
        this.revert = revert;
        return this;
    }
}