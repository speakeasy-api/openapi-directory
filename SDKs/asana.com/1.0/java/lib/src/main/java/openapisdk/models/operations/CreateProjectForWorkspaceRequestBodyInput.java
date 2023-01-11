package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProjectForWorkspaceRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.ProjectRequestInput data;
    public CreateProjectForWorkspaceRequestBodyInput withData(openapisdk.models.shared.ProjectRequestInput data) {
        this.data = data;
        return this;
    }
}