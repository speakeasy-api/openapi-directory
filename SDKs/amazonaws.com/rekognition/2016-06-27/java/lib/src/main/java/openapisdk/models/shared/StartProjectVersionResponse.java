package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartProjectVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ProjectVersionStatusEnum status;
    public StartProjectVersionResponse withStatus(ProjectVersionStatusEnum status) {
        this.status = status;
        return this;
    }
}