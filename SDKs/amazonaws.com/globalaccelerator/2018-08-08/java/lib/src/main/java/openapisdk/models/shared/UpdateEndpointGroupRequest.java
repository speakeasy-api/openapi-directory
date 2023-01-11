package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateEndpointGroupRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointConfigurations")
    public EndpointConfiguration[] endpointConfigurations;
    public UpdateEndpointGroupRequest withEndpointConfigurations(EndpointConfiguration[] endpointConfigurations) {
        this.endpointConfigurations = endpointConfigurations;
        return this;
    }
    @JsonProperty("EndpointGroupArn")
    public String endpointGroupArn;
    public UpdateEndpointGroupRequest withEndpointGroupArn(String endpointGroupArn) {
        this.endpointGroupArn = endpointGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckIntervalSeconds")
    public Long healthCheckIntervalSeconds;
    public UpdateEndpointGroupRequest withHealthCheckIntervalSeconds(Long healthCheckIntervalSeconds) {
        this.healthCheckIntervalSeconds = healthCheckIntervalSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckPath")
    public String healthCheckPath;
    public UpdateEndpointGroupRequest withHealthCheckPath(String healthCheckPath) {
        this.healthCheckPath = healthCheckPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckPort")
    public Long healthCheckPort;
    public UpdateEndpointGroupRequest withHealthCheckPort(Long healthCheckPort) {
        this.healthCheckPort = healthCheckPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckProtocol")
    public HealthCheckProtocolEnum healthCheckProtocol;
    public UpdateEndpointGroupRequest withHealthCheckProtocol(HealthCheckProtocolEnum healthCheckProtocol) {
        this.healthCheckProtocol = healthCheckProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortOverrides")
    public PortOverride[] portOverrides;
    public UpdateEndpointGroupRequest withPortOverrides(PortOverride[] portOverrides) {
        this.portOverrides = portOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThresholdCount")
    public Long thresholdCount;
    public UpdateEndpointGroupRequest withThresholdCount(Long thresholdCount) {
        this.thresholdCount = thresholdCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrafficDialPercentage")
    public Float trafficDialPercentage;
    public UpdateEndpointGroupRequest withTrafficDialPercentage(Float trafficDialPercentage) {
        this.trafficDialPercentage = trafficDialPercentage;
        return this;
    }
}