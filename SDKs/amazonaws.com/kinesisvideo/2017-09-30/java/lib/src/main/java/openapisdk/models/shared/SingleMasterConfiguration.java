package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SingleMasterConfiguration
 * A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
**/
public class SingleMasterConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageTtlSeconds")
    public Long messageTtlSeconds;
    public SingleMasterConfiguration withMessageTtlSeconds(Long messageTtlSeconds) {
        this.messageTtlSeconds = messageTtlSeconds;
        return this;
    }
}