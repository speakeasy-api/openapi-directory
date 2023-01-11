package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetContainerImagesRequest {
    @JsonProperty("serviceName")
    public String serviceName;
    public GetContainerImagesRequest withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}