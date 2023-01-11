package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutConfigurationSetSuppressionOptionsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuppressedReasons")
    public openapisdk.models.shared.SuppressionListReasonEnum[] suppressedReasons;
    public PutConfigurationSetSuppressionOptionsRequestBody withSuppressedReasons(openapisdk.models.shared.SuppressionListReasonEnum[] suppressedReasons) {
        this.suppressedReasons = suppressedReasons;
        return this;
    }
}