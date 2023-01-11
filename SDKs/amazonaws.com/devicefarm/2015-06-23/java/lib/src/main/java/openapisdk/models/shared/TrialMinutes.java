package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrialMinutes
 * Represents information about free trial device minutes for an AWS account.
**/
public class TrialMinutes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remaining")
    public Double remaining;
    public TrialMinutes withRemaining(Double remaining) {
        this.remaining = remaining;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public TrialMinutes withTotal(Double total) {
        this.total = total;
        return this;
    }
}