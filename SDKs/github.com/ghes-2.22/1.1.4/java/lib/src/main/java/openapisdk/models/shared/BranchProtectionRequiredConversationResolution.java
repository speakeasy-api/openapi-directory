package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BranchProtectionRequiredConversationResolution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public BranchProtectionRequiredConversationResolution withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}