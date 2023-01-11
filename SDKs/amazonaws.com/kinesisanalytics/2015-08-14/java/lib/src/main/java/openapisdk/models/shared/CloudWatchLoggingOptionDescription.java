package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudWatchLoggingOptionDescription
 * Description of the CloudWatch logging option.
**/
public class CloudWatchLoggingOptionDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptionId")
    public String cloudWatchLoggingOptionId;
    public CloudWatchLoggingOptionDescription withCloudWatchLoggingOptionId(String cloudWatchLoggingOptionId) {
        this.cloudWatchLoggingOptionId = cloudWatchLoggingOptionId;
        return this;
    }
    @JsonProperty("LogStreamARN")
    public String logStreamARN;
    public CloudWatchLoggingOptionDescription withLogStreamArn(String logStreamARN) {
        this.logStreamARN = logStreamARN;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public CloudWatchLoggingOptionDescription withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}