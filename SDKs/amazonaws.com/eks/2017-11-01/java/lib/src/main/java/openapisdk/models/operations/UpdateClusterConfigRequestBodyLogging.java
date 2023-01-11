package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateClusterConfigRequestBodyLogging
 * An object representing the logging configuration for resources in your cluster.
**/
public class UpdateClusterConfigRequestBodyLogging {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterLogging")
    public openapisdk.models.shared.LogSetup[] clusterLogging;
    public UpdateClusterConfigRequestBodyLogging withClusterLogging(openapisdk.models.shared.LogSetup[] clusterLogging) {
        this.clusterLogging = clusterLogging;
        return this;
    }
}