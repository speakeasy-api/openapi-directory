package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddonHealth
 * The health of the add-on.
**/
public class AddonHealth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public AddonIssue[] issues;
    public AddonHealth withIssues(AddonIssue[] issues) {
        this.issues = issues;
        return this;
    }
}