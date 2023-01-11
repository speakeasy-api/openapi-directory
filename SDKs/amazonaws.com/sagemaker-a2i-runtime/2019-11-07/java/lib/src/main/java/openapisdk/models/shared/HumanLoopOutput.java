package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * HumanLoopOutput
 * Information about where the human output will be stored.
**/
public class HumanLoopOutput {
    @JsonProperty("OutputS3Uri")
    public String outputS3Uri;
    public HumanLoopOutput withOutputS3Uri(String outputS3Uri) {
        this.outputS3Uri = outputS3Uri;
        return this;
    }
}