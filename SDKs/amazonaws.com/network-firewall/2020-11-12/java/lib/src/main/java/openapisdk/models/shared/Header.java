package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Header
 * The 5-tuple criteria for AWS Network Firewall to use to inspect packet headers in stateful traffic flow inspection. Traffic flows that match the criteria are a match for the corresponding <a>StatefulRule</a>. 
**/
public class Header {
    @JsonProperty("Destination")
    public String destination;
    public Header withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonProperty("DestinationPort")
    public String destinationPort;
    public Header withDestinationPort(String destinationPort) {
        this.destinationPort = destinationPort;
        return this;
    }
    @JsonProperty("Direction")
    public StatefulRuleDirectionEnum direction;
    public Header withDirection(StatefulRuleDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonProperty("Protocol")
    public StatefulRuleProtocolEnum protocol;
    public Header withProtocol(StatefulRuleProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("Source")
    public String source;
    public Header withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonProperty("SourcePort")
    public String sourcePort;
    public Header withSourcePort(String sourcePort) {
        this.sourcePort = sourcePort;
        return this;
    }
}