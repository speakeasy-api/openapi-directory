package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeStreamSummaryOutput {
    @JsonProperty("StreamDescriptionSummary")
    public StreamDescriptionSummary streamDescriptionSummary;
    public DescribeStreamSummaryOutput withStreamDescriptionSummary(StreamDescriptionSummary streamDescriptionSummary) {
        this.streamDescriptionSummary = streamDescriptionSummary;
        return this;
    }
}