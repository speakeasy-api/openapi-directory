package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeConfigurationRecorderStatusRequest
 * The input for the <a>DescribeConfigurationRecorderStatus</a> action.
**/
public class DescribeConfigurationRecorderStatusRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationRecorderNames")
    public String[] configurationRecorderNames;
    public DescribeConfigurationRecorderStatusRequest withConfigurationRecorderNames(String[] configurationRecorderNames) {
        this.configurationRecorderNames = configurationRecorderNames;
        return this;
    }
}