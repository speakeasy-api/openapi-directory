package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeStreamResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamInfo")
    public StreamInfo streamInfo;
    public DescribeStreamResponse withStreamInfo(StreamInfo streamInfo) {
        this.streamInfo = streamInfo;
        return this;
    }
}