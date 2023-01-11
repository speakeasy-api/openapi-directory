package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudWatchLogsLogGroup
 * <p/>
**/
public class CloudWatchLogsLogGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logGroupArn")
    public String logGroupArn;
    public CloudWatchLogsLogGroup withLogGroupArn(String logGroupArn) {
        this.logGroupArn = logGroupArn;
        return this;
    }
}