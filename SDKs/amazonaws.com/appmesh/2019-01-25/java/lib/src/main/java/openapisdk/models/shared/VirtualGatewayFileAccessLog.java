package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualGatewayFileAccessLog
 * An object that represents an access log file.
**/
public class VirtualGatewayFileAccessLog {
    @JsonProperty("path")
    public String path;
    public VirtualGatewayFileAccessLog withPath(String path) {
        this.path = path;
        return this;
    }
}