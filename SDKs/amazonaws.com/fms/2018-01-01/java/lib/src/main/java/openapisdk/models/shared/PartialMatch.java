package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PartialMatch
 * The reference rule that partially matches the <code>ViolationTarget</code> rule and violation reason.
**/
public class PartialMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reference")
    public String reference;
    public PartialMatch withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetViolationReasons")
    public String[] targetViolationReasons;
    public PartialMatch withTargetViolationReasons(String[] targetViolationReasons) {
        this.targetViolationReasons = targetViolationReasons;
        return this;
    }
}