package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CloudWatchLoggingOption
 * Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN.
**/
public class CloudWatchLoggingOption {
    @JsonProperty("LogStreamARN")
    public String logStreamARN;
    public CloudWatchLoggingOption withLogStreamArn(String logStreamARN) {
        this.logStreamARN = logStreamARN;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public CloudWatchLoggingOption withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}