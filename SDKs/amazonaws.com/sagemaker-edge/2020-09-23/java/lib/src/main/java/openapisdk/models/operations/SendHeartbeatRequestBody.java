package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendHeartbeatRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AgentMetrics")
    public openapisdk.models.shared.EdgeMetric[] agentMetrics;
    public SendHeartbeatRequestBody withAgentMetrics(openapisdk.models.shared.EdgeMetric[] agentMetrics) {
        this.agentMetrics = agentMetrics;
        return this;
    }
    @JsonProperty("AgentVersion")
    public String agentVersion;
    public SendHeartbeatRequestBody withAgentVersion(String agentVersion) {
        this.agentVersion = agentVersion;
        return this;
    }
    @JsonProperty("DeviceFleetName")
    public String deviceFleetName;
    public SendHeartbeatRequestBody withDeviceFleetName(String deviceFleetName) {
        this.deviceFleetName = deviceFleetName;
        return this;
    }
    @JsonProperty("DeviceName")
    public String deviceName;
    public SendHeartbeatRequestBody withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Models")
    public openapisdk.models.shared.Model[] models;
    public SendHeartbeatRequestBody withModels(openapisdk.models.shared.Model[] models) {
        this.models = models;
        return this;
    }
}