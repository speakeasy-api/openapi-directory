package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SuppressionAttributes
 * An object that contains information about the email address suppression preferences for your account in the current AWS Region.
**/
public class SuppressionAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuppressedReasons")
    public SuppressionListReasonEnum[] suppressedReasons;
    public SuppressionAttributes withSuppressedReasons(SuppressionListReasonEnum[] suppressedReasons) {
        this.suppressedReasons = suppressedReasons;
        return this;
    }
}