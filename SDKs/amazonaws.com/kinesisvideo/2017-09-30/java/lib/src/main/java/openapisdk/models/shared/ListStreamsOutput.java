package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListStreamsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListStreamsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamInfoList")
    public StreamInfo[] streamInfoList;
    public ListStreamsOutput withStreamInfoList(StreamInfo[] streamInfoList) {
        this.streamInfoList = streamInfoList;
        return this;
    }
}