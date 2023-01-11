package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TcpTimeout
 * An object that represents types of timeouts. 
**/
public class TcpTimeout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idle")
    public Duration idle;
    public TcpTimeout withIdle(Duration idle) {
        this.idle = idle;
        return this;
    }
}