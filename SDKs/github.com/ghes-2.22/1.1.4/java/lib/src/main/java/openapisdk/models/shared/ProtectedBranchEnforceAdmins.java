package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProtectedBranchEnforceAdmins {
    @JsonProperty("enabled")
    public Boolean enabled;
    public ProtectedBranchEnforceAdmins withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ProtectedBranchEnforceAdmins withUrl(String url) {
        this.url = url;
        return this;
    }
}