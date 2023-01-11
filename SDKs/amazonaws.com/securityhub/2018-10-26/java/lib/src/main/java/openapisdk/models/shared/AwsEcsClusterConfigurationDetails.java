package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsClusterConfigurationDetails
 * The run command configuration for the cluster.
**/
public class AwsEcsClusterConfigurationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecuteCommandConfiguration")
    public AwsEcsClusterConfigurationExecuteCommandConfigurationDetails executeCommandConfiguration;
    public AwsEcsClusterConfigurationDetails withExecuteCommandConfiguration(AwsEcsClusterConfigurationExecuteCommandConfigurationDetails executeCommandConfiguration) {
        this.executeCommandConfiguration = executeCommandConfiguration;
        return this;
    }
}