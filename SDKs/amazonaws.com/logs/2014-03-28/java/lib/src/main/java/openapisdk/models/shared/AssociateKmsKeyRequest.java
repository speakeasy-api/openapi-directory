package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateKmsKeyRequest {
    @JsonProperty("kmsKeyId")
    public String kmsKeyId;
    public AssociateKmsKeyRequest withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonProperty("logGroupName")
    public String logGroupName;
    public AssociateKmsKeyRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
}