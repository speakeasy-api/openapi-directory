package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentNetworkInfo
 * Network details about the host where the agent/connector resides.
**/
public class AgentNetworkInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public AgentNetworkInfo withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("macAddress")
    public String macAddress;
    public AgentNetworkInfo withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
}