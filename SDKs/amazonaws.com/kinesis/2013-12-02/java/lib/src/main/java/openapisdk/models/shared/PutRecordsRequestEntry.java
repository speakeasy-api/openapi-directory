package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutRecordsRequestEntry
 * Represents the output for <code>PutRecords</code>.
**/
public class PutRecordsRequestEntry {
    @JsonProperty("Data")
    public String data;
    public PutRecordsRequestEntry withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExplicitHashKey")
    public String explicitHashKey;
    public PutRecordsRequestEntry withExplicitHashKey(String explicitHashKey) {
        this.explicitHashKey = explicitHashKey;
        return this;
    }
    @JsonProperty("PartitionKey")
    public String partitionKey;
    public PutRecordsRequestEntry withPartitionKey(String partitionKey) {
        this.partitionKey = partitionKey;
        return this;
    }
}