package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PortRange
 * A single port range specification. This is used for source and destination port ranges in the stateless rule <a>MatchAttributes</a>, <code>SourcePorts</code>, and <code>DestinationPorts</code> settings. 
**/
public class PortRange {
    @JsonProperty("FromPort")
    public Long fromPort;
    public PortRange withFromPort(Long fromPort) {
        this.fromPort = fromPort;
        return this;
    }
    @JsonProperty("ToPort")
    public Long toPort;
    public PortRange withToPort(Long toPort) {
        this.toPort = toPort;
        return this;
    }
}