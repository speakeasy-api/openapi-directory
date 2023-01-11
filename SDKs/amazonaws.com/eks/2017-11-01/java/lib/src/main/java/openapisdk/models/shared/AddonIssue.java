package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddonIssue
 * An issue related to an add-on.
**/
public class AddonIssue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public AddonIssueCodeEnum code;
    public AddonIssue withCode(AddonIssueCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public AddonIssue withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceIds")
    public String[] resourceIds;
    public AddonIssue withResourceIds(String[] resourceIds) {
        this.resourceIds = resourceIds;
        return this;
    }
}