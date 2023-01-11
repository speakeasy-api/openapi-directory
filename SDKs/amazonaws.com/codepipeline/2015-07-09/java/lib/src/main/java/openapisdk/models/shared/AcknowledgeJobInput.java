package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AcknowledgeJobInput
 * Represents the input of an AcknowledgeJob action.
**/
public class AcknowledgeJobInput {
    @JsonProperty("jobId")
    public String jobId;
    public AcknowledgeJobInput withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonProperty("nonce")
    public String nonce;
    public AcknowledgeJobInput withNonce(String nonce) {
        this.nonce = nonce;
        return this;
    }
}