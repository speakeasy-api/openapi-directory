package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CloudwatchLogsAction
 * Describes an action that sends data to CloudWatch Logs.
**/
public class CloudwatchLogsAction {
    @JsonProperty("logGroupName")
    public String logGroupName;
    public CloudwatchLogsAction withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CloudwatchLogsAction withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}