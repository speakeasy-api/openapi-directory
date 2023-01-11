package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StatusReason
 * Provides additional context for the value of <code>Compliance.Status</code>.
**/
public class StatusReason {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public StatusReason withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("ReasonCode")
    public String reasonCode;
    public StatusReason withReasonCode(String reasonCode) {
        this.reasonCode = reasonCode;
        return this;
    }
}