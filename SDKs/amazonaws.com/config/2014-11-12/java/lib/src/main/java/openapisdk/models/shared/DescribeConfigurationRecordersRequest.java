package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeConfigurationRecordersRequest
 * The input for the <a>DescribeConfigurationRecorders</a> action.
**/
public class DescribeConfigurationRecordersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationRecorderNames")
    public String[] configurationRecorderNames;
    public DescribeConfigurationRecordersRequest withConfigurationRecorderNames(String[] configurationRecorderNames) {
        this.configurationRecorderNames = configurationRecorderNames;
        return this;
    }
}