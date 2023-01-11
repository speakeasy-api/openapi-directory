package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutFunctionEventInvokeConfigRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationConfig")
    public PutFunctionEventInvokeConfigRequestBodyDestinationConfig destinationConfig;
    public PutFunctionEventInvokeConfigRequestBody withDestinationConfig(PutFunctionEventInvokeConfigRequestBodyDestinationConfig destinationConfig) {
        this.destinationConfig = destinationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumEventAgeInSeconds")
    public Long maximumEventAgeInSeconds;
    public PutFunctionEventInvokeConfigRequestBody withMaximumEventAgeInSeconds(Long maximumEventAgeInSeconds) {
        this.maximumEventAgeInSeconds = maximumEventAgeInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumRetryAttempts")
    public Long maximumRetryAttempts;
    public PutFunctionEventInvokeConfigRequestBody withMaximumRetryAttempts(Long maximumRetryAttempts) {
        this.maximumRetryAttempts = maximumRetryAttempts;
        return this;
    }
}