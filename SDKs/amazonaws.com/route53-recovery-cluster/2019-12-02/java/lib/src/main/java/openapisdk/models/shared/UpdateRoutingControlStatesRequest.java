package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRoutingControlStatesRequest {
    @JsonProperty("UpdateRoutingControlStateEntries")
    public UpdateRoutingControlStateEntry[] updateRoutingControlStateEntries;
    public UpdateRoutingControlStatesRequest withUpdateRoutingControlStateEntries(UpdateRoutingControlStateEntry[] updateRoutingControlStateEntries) {
        this.updateRoutingControlStateEntries = updateRoutingControlStateEntries;
        return this;
    }
}