package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetInstanceRequest {
    @JsonProperty("InstanceId")
    public String instanceId;
    public GetInstanceRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonProperty("ServiceId")
    public String serviceId;
    public GetInstanceRequest withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}