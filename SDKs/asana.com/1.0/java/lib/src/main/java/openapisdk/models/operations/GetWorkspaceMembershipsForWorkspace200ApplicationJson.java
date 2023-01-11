package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWorkspaceMembershipsForWorkspace200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.WorkspaceMembershipCompact[] data;
    public GetWorkspaceMembershipsForWorkspace200ApplicationJson withData(openapisdk.models.shared.WorkspaceMembershipCompact[] data) {
        this.data = data;
        return this;
    }
}