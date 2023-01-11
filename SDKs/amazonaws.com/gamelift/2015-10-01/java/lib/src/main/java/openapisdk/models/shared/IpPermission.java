package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IpPermission
 * <p>A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an instance in a fleet. New game sessions are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. Fleets with custom game builds must have permissions explicitly set. For Realtime Servers fleets, GameLift automatically opens two port ranges, one for TCP messaging and one for UDP.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetPortSettings</a> </p>
**/
public class IpPermission {
    @JsonProperty("FromPort")
    public Long fromPort;
    public IpPermission withFromPort(Long fromPort) {
        this.fromPort = fromPort;
        return this;
    }
    @JsonProperty("IpRange")
    public String ipRange;
    public IpPermission withIpRange(String ipRange) {
        this.ipRange = ipRange;
        return this;
    }
    @JsonProperty("Protocol")
    public IpProtocolEnum protocol;
    public IpPermission withProtocol(IpProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("ToPort")
    public Long toPort;
    public IpPermission withToPort(Long toPort) {
        this.toPort = toPort;
        return this;
    }
}