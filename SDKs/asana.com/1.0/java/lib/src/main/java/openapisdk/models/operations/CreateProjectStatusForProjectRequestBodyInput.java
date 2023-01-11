package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProjectStatusForProjectRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.ProjectStatusRequestInput data;
    public CreateProjectStatusForProjectRequestBodyInput withData(openapisdk.models.shared.ProjectStatusRequestInput data) {
        this.data = data;
        return this;
    }
}