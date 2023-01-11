package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MatchAttributes
 * Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags. 
**/
public class MatchAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationPorts")
    public PortRange[] destinationPorts;
    public MatchAttributes withDestinationPorts(PortRange[] destinationPorts) {
        this.destinationPorts = destinationPorts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Destinations")
    public Address[] destinations;
    public MatchAttributes withDestinations(Address[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Protocols")
    public Long[] protocols;
    public MatchAttributes withProtocols(Long[] protocols) {
        this.protocols = protocols;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourcePorts")
    public PortRange[] sourcePorts;
    public MatchAttributes withSourcePorts(PortRange[] sourcePorts) {
        this.sourcePorts = sourcePorts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sources")
    public Address[] sources;
    public MatchAttributes withSources(Address[] sources) {
        this.sources = sources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TCPFlags")
    public TcpFlagField[] tcpFlags;
    public MatchAttributes withTcpFlags(TcpFlagField[] tcpFlags) {
        this.tcpFlags = tcpFlags;
        return this;
    }
}