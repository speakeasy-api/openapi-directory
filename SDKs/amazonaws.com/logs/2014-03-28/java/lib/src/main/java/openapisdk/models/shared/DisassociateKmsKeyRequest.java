package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateKmsKeyRequest {
    @JsonProperty("logGroupName")
    public String logGroupName;
    public DisassociateKmsKeyRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
}