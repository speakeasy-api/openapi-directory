package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutRecordInput
 * Represents the input for <code>PutRecord</code>.
**/
public class PutRecordInput {
    @JsonProperty("Data")
    public String data;
    public PutRecordInput withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExplicitHashKey")
    public String explicitHashKey;
    public PutRecordInput withExplicitHashKey(String explicitHashKey) {
        this.explicitHashKey = explicitHashKey;
        return this;
    }
    @JsonProperty("PartitionKey")
    public String partitionKey;
    public PutRecordInput withPartitionKey(String partitionKey) {
        this.partitionKey = partitionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SequenceNumberForOrdering")
    public String sequenceNumberForOrdering;
    public PutRecordInput withSequenceNumberForOrdering(String sequenceNumberForOrdering) {
        this.sequenceNumberForOrdering = sequenceNumberForOrdering;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public PutRecordInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}