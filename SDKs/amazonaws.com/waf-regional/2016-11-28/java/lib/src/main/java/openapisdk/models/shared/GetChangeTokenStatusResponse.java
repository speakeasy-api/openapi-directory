package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetChangeTokenStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeTokenStatus")
    public ChangeTokenStatusEnum changeTokenStatus;
    public GetChangeTokenStatusResponse withChangeTokenStatus(ChangeTokenStatusEnum changeTokenStatus) {
        this.changeTokenStatus = changeTokenStatus;
        return this;
    }
}