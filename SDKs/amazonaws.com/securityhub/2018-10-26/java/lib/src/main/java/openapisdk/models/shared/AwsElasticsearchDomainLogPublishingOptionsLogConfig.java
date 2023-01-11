package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElasticsearchDomainLogPublishingOptionsLogConfig
 * The log configuration.
**/
public class AwsElasticsearchDomainLogPublishingOptionsLogConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLogsLogGroupArn")
    public String cloudWatchLogsLogGroupArn;
    public AwsElasticsearchDomainLogPublishingOptionsLogConfig withCloudWatchLogsLogGroupArn(String cloudWatchLogsLogGroupArn) {
        this.cloudWatchLogsLogGroupArn = cloudWatchLogsLogGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public AwsElasticsearchDomainLogPublishingOptionsLogConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}