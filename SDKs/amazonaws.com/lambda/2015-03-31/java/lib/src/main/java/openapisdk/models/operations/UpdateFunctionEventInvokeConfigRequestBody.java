package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFunctionEventInvokeConfigRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationConfig")
    public UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig destinationConfig;
    public UpdateFunctionEventInvokeConfigRequestBody withDestinationConfig(UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig destinationConfig) {
        this.destinationConfig = destinationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumEventAgeInSeconds")
    public Long maximumEventAgeInSeconds;
    public UpdateFunctionEventInvokeConfigRequestBody withMaximumEventAgeInSeconds(Long maximumEventAgeInSeconds) {
        this.maximumEventAgeInSeconds = maximumEventAgeInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumRetryAttempts")
    public Long maximumRetryAttempts;
    public UpdateFunctionEventInvokeConfigRequestBody withMaximumRetryAttempts(Long maximumRetryAttempts) {
        this.maximumRetryAttempts = maximumRetryAttempts;
        return this;
    }
}