package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutRetentionPolicyRequest {
    @JsonProperty("logGroupName")
    public String logGroupName;
    public PutRetentionPolicyRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonProperty("retentionInDays")
    public Long retentionInDays;
    public PutRetentionPolicyRequest withRetentionInDays(Long retentionInDays) {
        this.retentionInDays = retentionInDays;
        return this;
    }
}