package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudWatchLoggingOptions
 * Describes the Amazon CloudWatch logging options for your delivery stream.
**/
public class CloudWatchLoggingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public CloudWatchLoggingOptions withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogGroupName")
    public String logGroupName;
    public CloudWatchLoggingOptions withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogStreamName")
    public String logStreamName;
    public CloudWatchLoggingOptions withLogStreamName(String logStreamName) {
        this.logStreamName = logStreamName;
        return this;
    }
}