package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWorkspaceRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.WorkspaceRequestInput data;
    public UpdateWorkspaceRequestBodyInput withData(openapisdk.models.shared.WorkspaceRequestInput data) {
        this.data = data;
        return this;
    }
}