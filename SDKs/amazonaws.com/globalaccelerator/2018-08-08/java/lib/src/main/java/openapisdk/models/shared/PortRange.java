package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PortRange
 * A complex type for a range of ports for a listener.
**/
public class PortRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FromPort")
    public Long fromPort;
    public PortRange withFromPort(Long fromPort) {
        this.fromPort = fromPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ToPort")
    public Long toPort;
    public PortRange withToPort(Long toPort) {
        this.toPort = toPort;
        return this;
    }
}