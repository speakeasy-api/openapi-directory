package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteContainerServiceRequest {
    @JsonProperty("serviceName")
    public String serviceName;
    public DeleteContainerServiceRequest withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}