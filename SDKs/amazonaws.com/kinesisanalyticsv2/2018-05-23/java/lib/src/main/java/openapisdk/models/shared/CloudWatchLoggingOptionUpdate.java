package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudWatchLoggingOptionUpdate
 * Describes the Amazon CloudWatch logging option updates.
**/
public class CloudWatchLoggingOptionUpdate {
    @JsonProperty("CloudWatchLoggingOptionId")
    public String cloudWatchLoggingOptionId;
    public CloudWatchLoggingOptionUpdate withCloudWatchLoggingOptionId(String cloudWatchLoggingOptionId) {
        this.cloudWatchLoggingOptionId = cloudWatchLoggingOptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogStreamARNUpdate")
    public String logStreamARNUpdate;
    public CloudWatchLoggingOptionUpdate withLogStreamArnUpdate(String logStreamARNUpdate) {
        this.logStreamARNUpdate = logStreamARNUpdate;
        return this;
    }
}