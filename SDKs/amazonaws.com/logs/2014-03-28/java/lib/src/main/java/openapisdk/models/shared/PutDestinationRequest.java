package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutDestinationRequest {
    @JsonProperty("destinationName")
    public String destinationName;
    public PutDestinationRequest withDestinationName(String destinationName) {
        this.destinationName = destinationName;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public PutDestinationRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("targetArn")
    public String targetArn;
    public PutDestinationRequest withTargetArn(String targetArn) {
        this.targetArn = targetArn;
        return this;
    }
}