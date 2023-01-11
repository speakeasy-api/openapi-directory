package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePipelineStatusRequestBody {
    @JsonProperty("Status")
    public String status;
    public UpdatePipelineStatusRequestBody withStatus(String status) {
        this.status = status;
        return this;
    }
}