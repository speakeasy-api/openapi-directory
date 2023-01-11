package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientProperties
 * Describes an Amazon WorkSpaces client.
**/
public class ClientProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReconnectEnabled")
    public ReconnectEnumEnum reconnectEnabled;
    public ClientProperties withReconnectEnabled(ReconnectEnumEnum reconnectEnabled) {
        this.reconnectEnabled = reconnectEnabled;
        return this;
    }
}