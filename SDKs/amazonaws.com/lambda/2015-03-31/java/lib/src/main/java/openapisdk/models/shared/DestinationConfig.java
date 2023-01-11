package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestinationConfig
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
public class DestinationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OnFailure")
    public OnFailure onFailure;
    public DestinationConfig withOnFailure(OnFailure onFailure) {
        this.onFailure = onFailure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OnSuccess")
    public OnSuccess onSuccess;
    public DestinationConfig withOnSuccess(OnSuccess onSuccess) {
        this.onSuccess = onSuccess;
        return this;
    }
}