package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudWatchLogsLogDelivery
 * The settings for delivering connector logs to Amazon CloudWatch Logs.
**/
public class CloudWatchLogsLogDelivery {
    @JsonProperty("enabled")
    public Boolean enabled;
    public CloudWatchLogsLogDelivery withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logGroup")
    public String logGroup;
    public CloudWatchLogsLogDelivery withLogGroup(String logGroup) {
        this.logGroup = logGroup;
        return this;
    }
}