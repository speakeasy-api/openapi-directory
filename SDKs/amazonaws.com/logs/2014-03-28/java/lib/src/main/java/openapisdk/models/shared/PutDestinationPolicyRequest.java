package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutDestinationPolicyRequest {
    @JsonProperty("accessPolicy")
    public String accessPolicy;
    public PutDestinationPolicyRequest withAccessPolicy(String accessPolicy) {
        this.accessPolicy = accessPolicy;
        return this;
    }
    @JsonProperty("destinationName")
    public String destinationName;
    public PutDestinationPolicyRequest withDestinationName(String destinationName) {
        this.destinationName = destinationName;
        return this;
    }
}