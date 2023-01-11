package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TextLogDestination
 * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
**/
public class TextLogDestination {
    @JsonProperty("cloudWatch")
    public CloudWatchLogGroupLogDestination cloudWatch;
    public TextLogDestination withCloudWatch(CloudWatchLogGroupLogDestination cloudWatch) {
        this.cloudWatch = cloudWatch;
        return this;
    }
}