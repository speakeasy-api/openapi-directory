package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddUserForWorkspaceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.WorkspaceAddUserRequest data;
    public AddUserForWorkspaceRequestBody withData(openapisdk.models.shared.WorkspaceAddUserRequest data) {
        this.data = data;
        return this;
    }
}