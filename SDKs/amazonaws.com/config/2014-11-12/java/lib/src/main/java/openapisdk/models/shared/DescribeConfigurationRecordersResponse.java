package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeConfigurationRecordersResponse
 * The output for the <a>DescribeConfigurationRecorders</a> action.
**/
public class DescribeConfigurationRecordersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationRecorders")
    public ConfigurationRecorder[] configurationRecorders;
    public DescribeConfigurationRecordersResponse withConfigurationRecorders(ConfigurationRecorder[] configurationRecorders) {
        this.configurationRecorders = configurationRecorders;
        return this;
    }
}