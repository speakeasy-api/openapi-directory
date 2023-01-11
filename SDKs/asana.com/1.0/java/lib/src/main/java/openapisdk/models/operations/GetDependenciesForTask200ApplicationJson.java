package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDependenciesForTask200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TaskCompact[] data;
    public GetDependenciesForTask200ApplicationJson withData(openapisdk.models.shared.TaskCompact[] data) {
        this.data = data;
        return this;
    }
}