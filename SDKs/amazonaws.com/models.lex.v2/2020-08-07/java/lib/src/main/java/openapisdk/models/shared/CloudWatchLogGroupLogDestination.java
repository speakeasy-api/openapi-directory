package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CloudWatchLogGroupLogDestination
 * The Amazon CloudWatch Logs log group where the text and metadata logs are delivered. The log group must exist before you enable logging.
**/
public class CloudWatchLogGroupLogDestination {
    @JsonProperty("cloudWatchLogGroupArn")
    public String cloudWatchLogGroupArn;
    public CloudWatchLogGroupLogDestination withCloudWatchLogGroupArn(String cloudWatchLogGroupArn) {
        this.cloudWatchLogGroupArn = cloudWatchLogGroupArn;
        return this;
    }
    @JsonProperty("logPrefix")
    public String logPrefix;
    public CloudWatchLogGroupLogDestination withLogPrefix(String logPrefix) {
        this.logPrefix = logPrefix;
        return this;
    }
}