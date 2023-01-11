package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Logging
 * An object representing the logging configuration for resources in your cluster.
**/
public class Logging {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterLogging")
    public LogSetup[] clusterLogging;
    public Logging withClusterLogging(LogSetup[] clusterLogging) {
        this.clusterLogging = clusterLogging;
        return this;
    }
}