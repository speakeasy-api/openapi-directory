package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceAccess
 * Information required to remotely connect to a fleet instance. Access is requested by calling <a>GetInstanceAccess</a>. 
**/
public class InstanceAccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credentials")
    public InstanceCredentials credentials;
    public InstanceAccess withCredentials(InstanceCredentials credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetId")
    public String fleetId;
    public InstanceAccess withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;
    public InstanceAccess withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddress")
    public String ipAddress;
    public InstanceAccess withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OperatingSystem")
    public OperatingSystemEnum operatingSystem;
    public InstanceAccess withOperatingSystem(OperatingSystemEnum operatingSystem) {
        this.operatingSystem = operatingSystem;
        return this;
    }
}