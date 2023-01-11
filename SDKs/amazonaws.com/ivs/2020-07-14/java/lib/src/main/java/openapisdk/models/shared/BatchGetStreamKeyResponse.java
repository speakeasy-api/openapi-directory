package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetStreamKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public BatchError[] errors;
    public BatchGetStreamKeyResponse withErrors(BatchError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamKeys")
    public StreamKey[] streamKeys;
    public BatchGetStreamKeyResponse withStreamKeys(StreamKey[] streamKeys) {
        this.streamKeys = streamKeys;
        return this;
    }
}