package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeStreamOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamInfo")
    public StreamInfo streamInfo;
    public DescribeStreamOutput withStreamInfo(StreamInfo streamInfo) {
        this.streamInfo = streamInfo;
        return this;
    }
}