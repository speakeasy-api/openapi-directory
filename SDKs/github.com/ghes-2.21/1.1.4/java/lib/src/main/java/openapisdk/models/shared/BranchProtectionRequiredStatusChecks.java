package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BranchProtectionRequiredStatusChecks {
    @JsonProperty("contexts")
    public String[] contexts;
    public BranchProtectionRequiredStatusChecks withContexts(String[] contexts) {
        this.contexts = contexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contexts_url")
    public String contextsUrl;
    public BranchProtectionRequiredStatusChecks withContextsUrl(String contextsUrl) {
        this.contextsUrl = contextsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforcement_level")
    public String enforcementLevel;
    public BranchProtectionRequiredStatusChecks withEnforcementLevel(String enforcementLevel) {
        this.enforcementLevel = enforcementLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public BranchProtectionRequiredStatusChecks withUrl(String url) {
        this.url = url;
        return this;
    }
}