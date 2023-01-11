package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutRecordBatchOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Encrypted")
    public Boolean encrypted;
    public PutRecordBatchOutput withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    @JsonProperty("FailedPutCount")
    public Long failedPutCount;
    public PutRecordBatchOutput withFailedPutCount(Long failedPutCount) {
        this.failedPutCount = failedPutCount;
        return this;
    }
    @JsonProperty("RequestResponses")
    public PutRecordBatchResponseEntry[] requestResponses;
    public PutRecordBatchOutput withRequestResponses(PutRecordBatchResponseEntry[] requestResponses) {
        this.requestResponses = requestResponses;
        return this;
    }
}