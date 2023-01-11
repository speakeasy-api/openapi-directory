package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetRecordsInput
 * Represents the input for <a>GetRecords</a>.
**/
public class GetRecordsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public GetRecordsInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonProperty("ShardIterator")
    public String shardIterator;
    public GetRecordsInput withShardIterator(String shardIterator) {
        this.shardIterator = shardIterator;
        return this;
    }
}