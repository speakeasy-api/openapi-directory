package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProtectedBranchAllowForcePushes {
    @JsonProperty("enabled")
    public Boolean enabled;
    public ProtectedBranchAllowForcePushes withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}