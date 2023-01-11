package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualGatewayAccessLog
 * The access log configuration for a virtual gateway.
**/
public class VirtualGatewayAccessLog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public VirtualGatewayFileAccessLog file;
    public VirtualGatewayAccessLog withFile(VirtualGatewayFileAccessLog file) {
        this.file = file;
        return this;
    }
}