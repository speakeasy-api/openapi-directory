package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Record
 * The unit of data of the Kinesis data stream, which is composed of a sequence number, a partition key, and a data blob.
**/
public class Record {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ApproximateArrivalTimestamp")
    public OffsetDateTime approximateArrivalTimestamp;
    public Record withApproximateArrivalTimestamp(OffsetDateTime approximateArrivalTimestamp) {
        this.approximateArrivalTimestamp = approximateArrivalTimestamp;
        return this;
    }
    @JsonProperty("Data")
    public String data;
    public Record withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionType")
    public EncryptionTypeEnum encryptionType;
    public Record withEncryptionType(EncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonProperty("PartitionKey")
    public String partitionKey;
    public Record withPartitionKey(String partitionKey) {
        this.partitionKey = partitionKey;
        return this;
    }
    @JsonProperty("SequenceNumber")
    public String sequenceNumber;
    public Record withSequenceNumber(String sequenceNumber) {
        this.sequenceNumber = sequenceNumber;
        return this;
    }
}