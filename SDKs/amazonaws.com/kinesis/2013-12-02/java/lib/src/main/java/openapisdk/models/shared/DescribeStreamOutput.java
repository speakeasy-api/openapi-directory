package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeStreamOutput
 * Represents the output for <code>DescribeStream</code>.
**/
public class DescribeStreamOutput {
    @JsonProperty("StreamDescription")
    public StreamDescription streamDescription;
    public DescribeStreamOutput withStreamDescription(StreamDescription streamDescription) {
        this.streamDescription = streamDescription;
        return this;
    }
}