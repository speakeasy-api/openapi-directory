package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutRecordOutput
 * Represents the output for <code>PutRecord</code>.
**/
public class PutRecordOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionType")
    public EncryptionTypeEnum encryptionType;
    public PutRecordOutput withEncryptionType(EncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonProperty("SequenceNumber")
    public String sequenceNumber;
    public PutRecordOutput withSequenceNumber(String sequenceNumber) {
        this.sequenceNumber = sequenceNumber;
        return this;
    }
    @JsonProperty("ShardId")
    public String shardId;
    public PutRecordOutput withShardId(String shardId) {
        this.shardId = shardId;
        return this;
    }
}