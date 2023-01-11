package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TcpRoute
 * An object that represents a TCP route type.
**/
public class TcpRoute {
    @JsonProperty("action")
    public TcpRouteAction action;
    public TcpRoute withAction(TcpRouteAction action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public TcpTimeout timeout;
    public TcpRoute withTimeout(TcpTimeout timeout) {
        this.timeout = timeout;
        return this;
    }
}