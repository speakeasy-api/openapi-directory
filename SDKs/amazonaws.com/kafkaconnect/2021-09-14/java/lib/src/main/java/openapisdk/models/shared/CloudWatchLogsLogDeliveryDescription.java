package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudWatchLogsLogDeliveryDescription
 * A description of the log delivery settings.
**/
public class CloudWatchLogsLogDeliveryDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public CloudWatchLogsLogDeliveryDescription withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logGroup")
    public String logGroup;
    public CloudWatchLogsLogDeliveryDescription withLogGroup(String logGroup) {
        this.logGroup = logGroup;
        return this;
    }
}