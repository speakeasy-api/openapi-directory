package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateConfigurationSetRequestBodySuppressionOptions
 * An object that contains information about the suppression list preferences for your account.
**/
public class CreateConfigurationSetRequestBodySuppressionOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuppressedReasons")
    public openapisdk.models.shared.SuppressionListReasonEnum[] suppressedReasons;
    public CreateConfigurationSetRequestBodySuppressionOptions withSuppressedReasons(openapisdk.models.shared.SuppressionListReasonEnum[] suppressedReasons) {
        this.suppressedReasons = suppressedReasons;
        return this;
    }
}