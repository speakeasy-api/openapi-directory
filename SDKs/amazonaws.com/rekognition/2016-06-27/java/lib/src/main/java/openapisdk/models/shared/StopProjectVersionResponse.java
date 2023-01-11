package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StopProjectVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ProjectVersionStatusEnum status;
    public StopProjectVersionResponse withStatus(ProjectVersionStatusEnum status) {
        this.status = status;
        return this;
    }
}