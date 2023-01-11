package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails
 * Information about the type of monitoring for instances in the group.
**/
public class AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}