package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListStreamKeysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListStreamKeysResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("streamKeys")
    public StreamKeySummary[] streamKeys;
    public ListStreamKeysResponse withStreamKeys(StreamKeySummary[] streamKeys) {
        this.streamKeys = streamKeys;
        return this;
    }
}