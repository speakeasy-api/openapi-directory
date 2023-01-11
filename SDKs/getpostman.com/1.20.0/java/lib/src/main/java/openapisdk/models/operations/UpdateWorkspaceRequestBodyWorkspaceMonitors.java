package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWorkspaceRequestBodyWorkspaceMonitors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateWorkspaceRequestBodyWorkspaceMonitors withId(String id) {
        this.id = id;
        return this;
    }
}