package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListStreamProcessorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListStreamProcessorsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamProcessors")
    public StreamProcessor[] streamProcessors;
    public ListStreamProcessorsResponse withStreamProcessors(StreamProcessor[] streamProcessors) {
        this.streamProcessors = streamProcessors;
        return this;
    }
}