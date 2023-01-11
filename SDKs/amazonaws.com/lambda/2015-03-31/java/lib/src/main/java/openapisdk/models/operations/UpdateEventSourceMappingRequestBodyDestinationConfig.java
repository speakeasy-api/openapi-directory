package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateEventSourceMappingRequestBodyDestinationConfig
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
public class UpdateEventSourceMappingRequestBodyDestinationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OnFailure")
    public openapisdk.models.shared.OnFailure onFailure;
    public UpdateEventSourceMappingRequestBodyDestinationConfig withOnFailure(openapisdk.models.shared.OnFailure onFailure) {
        this.onFailure = onFailure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OnSuccess")
    public openapisdk.models.shared.OnSuccess onSuccess;
    public UpdateEventSourceMappingRequestBodyDestinationConfig withOnSuccess(openapisdk.models.shared.OnSuccess onSuccess) {
        this.onSuccess = onSuccess;
        return this;
    }
}