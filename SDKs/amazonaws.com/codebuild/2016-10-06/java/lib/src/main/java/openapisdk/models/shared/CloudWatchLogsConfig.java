package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudWatchLogsConfig
 *  Information about CloudWatch Logs for a build project. 
**/
public class CloudWatchLogsConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupName")
    public String groupName;
    public CloudWatchLogsConfig withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonProperty("status")
    public LogsConfigStatusTypeEnum status;
    public CloudWatchLogsConfig withStatus(LogsConfigStatusTypeEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamName")
    public String streamName;
    public CloudWatchLogsConfig withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}