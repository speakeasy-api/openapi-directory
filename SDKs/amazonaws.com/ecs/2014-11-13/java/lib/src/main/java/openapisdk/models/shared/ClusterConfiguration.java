package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClusterConfiguration
 * The execute command configuration for the cluster.
**/
public class ClusterConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executeCommandConfiguration")
    public ExecuteCommandConfiguration executeCommandConfiguration;
    public ClusterConfiguration withExecuteCommandConfiguration(ExecuteCommandConfiguration executeCommandConfiguration) {
        this.executeCommandConfiguration = executeCommandConfiguration;
        return this;
    }
}