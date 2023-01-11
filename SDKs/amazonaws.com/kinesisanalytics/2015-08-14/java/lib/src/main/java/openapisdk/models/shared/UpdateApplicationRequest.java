package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApplicationRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public UpdateApplicationRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("ApplicationUpdate")
    public ApplicationUpdate applicationUpdate;
    public UpdateApplicationRequest withApplicationUpdate(ApplicationUpdate applicationUpdate) {
        this.applicationUpdate = applicationUpdate;
        return this;
    }
    @JsonProperty("CurrentApplicationVersionId")
    public Long currentApplicationVersionId;
    public UpdateApplicationRequest withCurrentApplicationVersionId(Long currentApplicationVersionId) {
        this.currentApplicationVersionId = currentApplicationVersionId;
        return this;
    }
}