package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BranchProtectionRequiredSignatures {
    @JsonProperty("enabled")
    public Boolean enabled;
    public BranchProtectionRequiredSignatures withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public BranchProtectionRequiredSignatures withUrl(String url) {
        this.url = url;
        return this;
    }
}