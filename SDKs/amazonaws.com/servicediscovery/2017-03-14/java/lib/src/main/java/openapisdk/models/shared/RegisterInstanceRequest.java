package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterInstanceRequest {
    @JsonProperty("Attributes")
    public java.util.Map<String, String> attributes;
    public RegisterInstanceRequest withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatorRequestId")
    public String creatorRequestId;
    public RegisterInstanceRequest withCreatorRequestId(String creatorRequestId) {
        this.creatorRequestId = creatorRequestId;
        return this;
    }
    @JsonProperty("InstanceId")
    public String instanceId;
    public RegisterInstanceRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonProperty("ServiceId")
    public String serviceId;
    public RegisterInstanceRequest withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}