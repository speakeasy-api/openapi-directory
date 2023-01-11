package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * HashKeyRange
 * The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.
**/
public class HashKeyRange {
    @JsonProperty("EndingHashKey")
    public String endingHashKey;
    public HashKeyRange withEndingHashKey(String endingHashKey) {
        this.endingHashKey = endingHashKey;
        return this;
    }
    @JsonProperty("StartingHashKey")
    public String startingHashKey;
    public HashKeyRange withStartingHashKey(String startingHashKey) {
        this.startingHashKey = startingHashKey;
        return this;
    }
}