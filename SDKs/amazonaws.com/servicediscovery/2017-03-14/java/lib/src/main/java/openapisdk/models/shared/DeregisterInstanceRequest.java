package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeregisterInstanceRequest {
    @JsonProperty("InstanceId")
    public String instanceId;
    public DeregisterInstanceRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonProperty("ServiceId")
    public String serviceId;
    public DeregisterInstanceRequest withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}