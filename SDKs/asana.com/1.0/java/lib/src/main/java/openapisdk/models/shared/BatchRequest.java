package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchRequest
 * A request object for use in a batch request.
**/
public class BatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public BatchRequestAction[] actions;
    public BatchRequest withActions(BatchRequestAction[] actions) {
        this.actions = actions;
        return this;
    }
}