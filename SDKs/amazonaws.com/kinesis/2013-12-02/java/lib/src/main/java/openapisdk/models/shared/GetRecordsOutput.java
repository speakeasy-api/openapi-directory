package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetRecordsOutput
 * Represents the output for <a>GetRecords</a>.
**/
public class GetRecordsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChildShards")
    public ChildShard[] childShards;
    public GetRecordsOutput withChildShards(ChildShard[] childShards) {
        this.childShards = childShards;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MillisBehindLatest")
    public Long millisBehindLatest;
    public GetRecordsOutput withMillisBehindLatest(Long millisBehindLatest) {
        this.millisBehindLatest = millisBehindLatest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextShardIterator")
    public String nextShardIterator;
    public GetRecordsOutput withNextShardIterator(String nextShardIterator) {
        this.nextShardIterator = nextShardIterator;
        return this;
    }
    @JsonProperty("Records")
    public Record[] records;
    public GetRecordsOutput withRecords(Record[] records) {
        this.records = records;
        return this;
    }
}