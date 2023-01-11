package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutRecordOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Encrypted")
    public Boolean encrypted;
    public PutRecordOutput withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    @JsonProperty("RecordId")
    public String recordId;
    public PutRecordOutput withRecordId(String recordId) {
        this.recordId = recordId;
        return this;
    }
}