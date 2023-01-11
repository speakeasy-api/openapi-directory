package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSignalingChannelRequestBodySingleMasterConfiguration
 * A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
**/
public class UpdateSignalingChannelRequestBodySingleMasterConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageTtlSeconds")
    public Long messageTtlSeconds;
    public UpdateSignalingChannelRequestBodySingleMasterConfiguration withMessageTtlSeconds(Long messageTtlSeconds) {
        this.messageTtlSeconds = messageTtlSeconds;
        return this;
    }
}