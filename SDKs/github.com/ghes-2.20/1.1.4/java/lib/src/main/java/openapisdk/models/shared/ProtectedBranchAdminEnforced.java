package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProtectedBranchAdminEnforced
 * Protected Branch Admin Enforced
**/
public class ProtectedBranchAdminEnforced {
    @JsonProperty("enabled")
    public Boolean enabled;
    public ProtectedBranchAdminEnforced withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ProtectedBranchAdminEnforced withUrl(String url) {
        this.url = url;
        return this;
    }
}