package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateProject200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.ProjectResponse data;
    public UpdateProject200ApplicationJson withData(openapisdk.models.shared.ProjectResponse data) {
        this.data = data;
        return this;
    }
}