package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CloseStatusFilter
 * Used to filter the closed workflow executions in visibility APIs by their close status.
**/
public class CloseStatusFilter {
    @JsonProperty("status")
    public CloseStatusEnum status;
    public CloseStatusFilter withStatus(CloseStatusEnum status) {
        this.status = status;
        return this;
    }
}