package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeLogStreamsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logStreams")
    public LogStream[] logStreams;
    public DescribeLogStreamsResponse withLogStreams(LogStream[] logStreams) {
        this.logStreams = logStreams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeLogStreamsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}