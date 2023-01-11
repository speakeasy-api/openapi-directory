package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutRecordsOutput
 *  <code>PutRecords</code> results.
**/
public class PutRecordsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionType")
    public EncryptionTypeEnum encryptionType;
    public PutRecordsOutput withEncryptionType(EncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedRecordCount")
    public Long failedRecordCount;
    public PutRecordsOutput withFailedRecordCount(Long failedRecordCount) {
        this.failedRecordCount = failedRecordCount;
        return this;
    }
    @JsonProperty("Records")
    public PutRecordsResultEntry[] records;
    public PutRecordsOutput withRecords(PutRecordsResultEntry[] records) {
        this.records = records;
        return this;
    }
}