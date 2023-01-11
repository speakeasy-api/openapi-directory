package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProtectedBranchAllowDeletions {
    @JsonProperty("enabled")
    public Boolean enabled;
    public ProtectedBranchAllowDeletions withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}