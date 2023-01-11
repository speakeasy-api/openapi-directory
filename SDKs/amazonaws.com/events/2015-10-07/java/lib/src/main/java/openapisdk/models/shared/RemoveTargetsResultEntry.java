package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveTargetsResultEntry
 * Represents a target that failed to be removed from a rule.
**/
public class RemoveTargetsResultEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public String errorCode;
    public RemoveTargetsResultEntry withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public RemoveTargetsResultEntry withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetId")
    public String targetId;
    public RemoveTargetsResultEntry withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}