package openapisdk.models.shared;



public class TrafficFilter {
    public Long dSCP;
    public TrafficFilter withDScp(Long dSCP) {
        this.dSCP = dSCP;
        return this;
    }
    public String[] dstAddress;
    public TrafficFilter withDstAddress(String[] dstAddress) {
        this.dstAddress = dstAddress;
        return this;
    }
    public String[] dstPort;
    public TrafficFilter withDstPort(String[] dstPort) {
        this.dstPort = dstPort;
        return this;
    }
    public String[] dstTunnelPort;
    public TrafficFilter withDstTunnelPort(String[] dstTunnelPort) {
        this.dstTunnelPort = dstTunnelPort;
        return this;
    }
    public String[] protocol;
    public TrafficFilter withProtocol(String[] protocol) {
        this.protocol = protocol;
        return this;
    }
    public Long qCI;
    public TrafficFilter withQCi(Long qCI) {
        this.qCI = qCI;
        return this;
    }
    public String[] srcAddress;
    public TrafficFilter withSrcAddress(String[] srcAddress) {
        this.srcAddress = srcAddress;
        return this;
    }
    public String[] srcPort;
    public TrafficFilter withSrcPort(String[] srcPort) {
        this.srcPort = srcPort;
        return this;
    }
    public String[] srcTunnelAddress;
    public TrafficFilter withSrcTunnelAddress(String[] srcTunnelAddress) {
        this.srcTunnelAddress = srcTunnelAddress;
        return this;
    }
    public String[] srcTunnelPort;
    public TrafficFilter withSrcTunnelPort(String[] srcTunnelPort) {
        this.srcTunnelPort = srcTunnelPort;
        return this;
    }
    public Long tC;
    public TrafficFilter withTC(Long tC) {
        this.tC = tC;
        return this;
    }
    public String[] tag;
    public TrafficFilter withTag(String[] tag) {
        this.tag = tag;
        return this;
    }
    public String[] tgtTunnelAddress;
    public TrafficFilter withTgtTunnelAddress(String[] tgtTunnelAddress) {
        this.tgtTunnelAddress = tgtTunnelAddress;
        return this;
    }
}