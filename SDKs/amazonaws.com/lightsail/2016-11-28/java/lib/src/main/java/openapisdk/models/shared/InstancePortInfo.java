package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstancePortInfo
 * Describes information about ports for an Amazon Lightsail instance.
**/
public class InstancePortInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessDirection")
    public AccessDirectionEnum accessDirection;
    public InstancePortInfo withAccessDirection(AccessDirectionEnum accessDirection) {
        this.accessDirection = accessDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessFrom")
    public String accessFrom;
    public InstancePortInfo withAccessFrom(String accessFrom) {
        this.accessFrom = accessFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessType")
    public PortAccessTypeEnum accessType;
    public InstancePortInfo withAccessType(PortAccessTypeEnum accessType) {
        this.accessType = accessType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidrListAliases")
    public String[] cidrListAliases;
    public InstancePortInfo withCidrListAliases(String[] cidrListAliases) {
        this.cidrListAliases = cidrListAliases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidrs")
    public String[] cidrs;
    public InstancePortInfo withCidrs(String[] cidrs) {
        this.cidrs = cidrs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commonName")
    public String commonName;
    public InstancePortInfo withCommonName(String commonName) {
        this.commonName = commonName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromPort")
    public Long fromPort;
    public InstancePortInfo withFromPort(Long fromPort) {
        this.fromPort = fromPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv6Cidrs")
    public String[] ipv6Cidrs;
    public InstancePortInfo withIpv6Cidrs(String[] ipv6Cidrs) {
        this.ipv6Cidrs = ipv6Cidrs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public NetworkProtocolEnum protocol;
    public InstancePortInfo withProtocol(NetworkProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toPort")
    public Long toPort;
    public InstancePortInfo withToPort(Long toPort) {
        this.toPort = toPort;
        return this;
    }
}