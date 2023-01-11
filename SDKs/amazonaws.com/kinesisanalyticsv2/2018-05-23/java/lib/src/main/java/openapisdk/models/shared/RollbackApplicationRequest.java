package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RollbackApplicationRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public RollbackApplicationRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("CurrentApplicationVersionId")
    public Long currentApplicationVersionId;
    public RollbackApplicationRequest withCurrentApplicationVersionId(Long currentApplicationVersionId) {
        this.currentApplicationVersionId = currentApplicationVersionId;
        return this;
    }
}