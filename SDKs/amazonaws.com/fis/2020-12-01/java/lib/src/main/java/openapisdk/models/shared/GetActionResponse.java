package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetActionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public Action action;
    public GetActionResponse withAction(Action action) {
        this.action = action;
        return this;
    }
}