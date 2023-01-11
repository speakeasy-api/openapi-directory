package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SuppressionOptions
 * An object that contains information about the suppression list preferences for your account.
**/
public class SuppressionOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuppressedReasons")
    public SuppressionListReasonEnum[] suppressedReasons;
    public SuppressionOptions withSuppressedReasons(SuppressionListReasonEnum[] suppressedReasons) {
        this.suppressedReasons = suppressedReasons;
        return this;
    }
}