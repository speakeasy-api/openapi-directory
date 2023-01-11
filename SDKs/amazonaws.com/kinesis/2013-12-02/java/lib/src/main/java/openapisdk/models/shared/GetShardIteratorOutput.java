package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetShardIteratorOutput
 * Represents the output for <code>GetShardIterator</code>.
**/
public class GetShardIteratorOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShardIterator")
    public String shardIterator;
    public GetShardIteratorOutput withShardIterator(String shardIterator) {
        this.shardIterator = shardIterator;
        return this;
    }
}