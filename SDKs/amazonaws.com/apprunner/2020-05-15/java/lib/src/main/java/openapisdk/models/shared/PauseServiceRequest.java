package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PauseServiceRequest {
    @JsonProperty("ServiceArn")
    public String serviceArn;
    public PauseServiceRequest withServiceArn(String serviceArn) {
        this.serviceArn = serviceArn;
        return this;
    }
}