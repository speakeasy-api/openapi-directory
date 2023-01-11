package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveUserForWorkspaceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.WorkspaceRemoveUserRequest data;
    public RemoveUserForWorkspaceRequestBody withData(openapisdk.models.shared.WorkspaceRemoveUserRequest data) {
        this.data = data;
        return this;
    }
}