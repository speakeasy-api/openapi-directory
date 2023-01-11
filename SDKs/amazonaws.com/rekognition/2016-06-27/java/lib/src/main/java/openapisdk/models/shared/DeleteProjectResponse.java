package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteProjectResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ProjectStatusEnum status;
    public DeleteProjectResponse withStatus(ProjectStatusEnum status) {
        this.status = status;
        return this;
    }
}