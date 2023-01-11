package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetProjectsForWorkspace200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.ProjectCompact[] data;
    public GetProjectsForWorkspace200ApplicationJson withData(openapisdk.models.shared.ProjectCompact[] data) {
        this.data = data;
        return this;
    }
}