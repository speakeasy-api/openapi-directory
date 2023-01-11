package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointGroup
 * A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener. 
**/
public class EndpointGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointDescriptions")
    public EndpointDescription[] endpointDescriptions;
    public EndpointGroup withEndpointDescriptions(EndpointDescription[] endpointDescriptions) {
        this.endpointDescriptions = endpointDescriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointGroupArn")
    public String endpointGroupArn;
    public EndpointGroup withEndpointGroupArn(String endpointGroupArn) {
        this.endpointGroupArn = endpointGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointGroupRegion")
    public String endpointGroupRegion;
    public EndpointGroup withEndpointGroupRegion(String endpointGroupRegion) {
        this.endpointGroupRegion = endpointGroupRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckIntervalSeconds")
    public Long healthCheckIntervalSeconds;
    public EndpointGroup withHealthCheckIntervalSeconds(Long healthCheckIntervalSeconds) {
        this.healthCheckIntervalSeconds = healthCheckIntervalSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckPath")
    public String healthCheckPath;
    public EndpointGroup withHealthCheckPath(String healthCheckPath) {
        this.healthCheckPath = healthCheckPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckPort")
    public Long healthCheckPort;
    public EndpointGroup withHealthCheckPort(Long healthCheckPort) {
        this.healthCheckPort = healthCheckPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckProtocol")
    public HealthCheckProtocolEnum healthCheckProtocol;
    public EndpointGroup withHealthCheckProtocol(HealthCheckProtocolEnum healthCheckProtocol) {
        this.healthCheckProtocol = healthCheckProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortOverrides")
    public PortOverride[] portOverrides;
    public EndpointGroup withPortOverrides(PortOverride[] portOverrides) {
        this.portOverrides = portOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThresholdCount")
    public Long thresholdCount;
    public EndpointGroup withThresholdCount(Long thresholdCount) {
        this.thresholdCount = thresholdCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrafficDialPercentage")
    public Float trafficDialPercentage;
    public EndpointGroup withTrafficDialPercentage(Float trafficDialPercentage) {
        this.trafficDialPercentage = trafficDialPercentage;
        return this;
    }
}