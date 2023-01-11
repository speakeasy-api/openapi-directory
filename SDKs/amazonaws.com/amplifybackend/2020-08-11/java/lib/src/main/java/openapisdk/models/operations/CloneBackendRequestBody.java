package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CloneBackendRequestBody {
    @JsonProperty("targetEnvironmentName")
    public String targetEnvironmentName;
    public CloneBackendRequestBody withTargetEnvironmentName(String targetEnvironmentName) {
        this.targetEnvironmentName = targetEnvironmentName;
        return this;
    }
}