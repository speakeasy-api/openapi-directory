package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LogDestination
 * <p/>
**/
public class LogDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudWatchLogsLogGroup")
    public CloudWatchLogsLogGroup cloudWatchLogsLogGroup;
    public LogDestination withCloudWatchLogsLogGroup(CloudWatchLogsLogGroup cloudWatchLogsLogGroup) {
        this.cloudWatchLogsLogGroup = cloudWatchLogsLogGroup;
        return this;
    }
}