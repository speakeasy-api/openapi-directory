package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PortInfo
 * Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
**/
public class PortInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidrListAliases")
    public String[] cidrListAliases;
    public PortInfo withCidrListAliases(String[] cidrListAliases) {
        this.cidrListAliases = cidrListAliases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidrs")
    public String[] cidrs;
    public PortInfo withCidrs(String[] cidrs) {
        this.cidrs = cidrs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromPort")
    public Long fromPort;
    public PortInfo withFromPort(Long fromPort) {
        this.fromPort = fromPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv6Cidrs")
    public String[] ipv6Cidrs;
    public PortInfo withIpv6Cidrs(String[] ipv6Cidrs) {
        this.ipv6Cidrs = ipv6Cidrs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public NetworkProtocolEnum protocol;
    public PortInfo withProtocol(NetworkProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toPort")
    public Long toPort;
    public PortInfo withToPort(Long toPort) {
        this.toPort = toPort;
        return this;
    }
}