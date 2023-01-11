package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudWatchLogsConfiguration
 * Describes the Amazon CloudWatch logs configuration for a layer.
**/
public class CloudWatchLogsConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public CloudWatchLogsConfiguration withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogStreams")
    public CloudWatchLogsLogStream[] logStreams;
    public CloudWatchLogsConfiguration withLogStreams(CloudWatchLogsLogStream[] logStreams) {
        this.logStreams = logStreams;
        return this;
    }
}