package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeConfigurationRecorderStatusResponse
 * The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON format.
**/
public class DescribeConfigurationRecorderStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationRecordersStatus")
    public ConfigurationRecorderStatus[] configurationRecordersStatus;
    public DescribeConfigurationRecorderStatusResponse withConfigurationRecordersStatus(ConfigurationRecorderStatus[] configurationRecordersStatus) {
        this.configurationRecordersStatus = configurationRecordersStatus;
        return this;
    }
}