package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetProjectMembershipsForProject200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.ProjectMembershipCompact[] data;
    public GetProjectMembershipsForProject200ApplicationJson withData(openapisdk.models.shared.ProjectMembershipCompact[] data) {
        this.data = data;
        return this;
    }
}