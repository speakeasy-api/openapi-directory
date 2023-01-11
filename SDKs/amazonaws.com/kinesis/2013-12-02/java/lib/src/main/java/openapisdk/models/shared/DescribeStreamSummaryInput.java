package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeStreamSummaryInput {
    @JsonProperty("StreamName")
    public String streamName;
    public DescribeStreamSummaryInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}