package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualGatewayLogging
 * An object that represents logging information.
**/
public class VirtualGatewayLogging {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessLog")
    public VirtualGatewayAccessLog accessLog;
    public VirtualGatewayLogging withAccessLog(VirtualGatewayAccessLog accessLog) {
        this.accessLog = accessLog;
        return this;
    }
}