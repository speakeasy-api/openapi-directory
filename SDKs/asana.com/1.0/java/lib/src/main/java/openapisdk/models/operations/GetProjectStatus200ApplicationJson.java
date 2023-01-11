package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetProjectStatus200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.ProjectStatusResponse data;
    public GetProjectStatus200ApplicationJson withData(openapisdk.models.shared.ProjectStatusResponse data) {
        this.data = data;
        return this;
    }
}