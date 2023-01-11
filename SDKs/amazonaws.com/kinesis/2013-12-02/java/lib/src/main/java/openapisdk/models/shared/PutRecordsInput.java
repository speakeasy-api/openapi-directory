package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutRecordsInput
 * A <code>PutRecords</code> request.
**/
public class PutRecordsInput {
    @JsonProperty("Records")
    public PutRecordsRequestEntry[] records;
    public PutRecordsInput withRecords(PutRecordsRequestEntry[] records) {
        this.records = records;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public PutRecordsInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}