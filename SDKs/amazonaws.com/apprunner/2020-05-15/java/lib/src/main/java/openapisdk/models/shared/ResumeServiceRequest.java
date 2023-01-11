package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResumeServiceRequest {
    @JsonProperty("ServiceArn")
    public String serviceArn;
    public ResumeServiceRequest withServiceArn(String serviceArn) {
        this.serviceArn = serviceArn;
        return this;
    }
}