package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClassificationStatus
 * Provides details about the current status of the sensitive data detection.
**/
public class ClassificationStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public ClassificationStatus withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reason")
    public String reason;
    public ClassificationStatus withReason(String reason) {
        this.reason = reason;
        return this;
    }
}