package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteContainerImageRequest {
    @JsonProperty("image")
    public String image;
    public DeleteContainerImageRequest withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonProperty("serviceName")
    public String serviceName;
    public DeleteContainerImageRequest withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}