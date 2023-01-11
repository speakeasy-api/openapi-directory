package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CloudWatchLoggingOption
 * Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN). 
**/
public class CloudWatchLoggingOption {
    @JsonProperty("LogStreamARN")
    public String logStreamARN;
    public CloudWatchLoggingOption withLogStreamArn(String logStreamARN) {
        this.logStreamARN = logStreamARN;
        return this;
    }
}