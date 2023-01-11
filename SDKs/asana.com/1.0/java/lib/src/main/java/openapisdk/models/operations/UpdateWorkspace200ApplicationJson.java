package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWorkspace200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.WorkspaceResponse data;
    public UpdateWorkspace200ApplicationJson withData(openapisdk.models.shared.WorkspaceResponse data) {
        this.data = data;
        return this;
    }
}