package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteServiceRequest {
    @JsonProperty("ServiceArn")
    public String serviceArn;
    public DeleteServiceRequest withServiceArn(String serviceArn) {
        this.serviceArn = serviceArn;
        return this;
    }
}