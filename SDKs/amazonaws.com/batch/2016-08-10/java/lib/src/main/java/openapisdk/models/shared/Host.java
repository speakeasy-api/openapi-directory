package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Host
 * Determine whether your data volume persists on the host container instance and where it is stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data isn't guaranteed to persist after the containers associated with it stop running.
**/
public class Host {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourcePath")
    public String sourcePath;
    public Host withSourcePath(String sourcePath) {
        this.sourcePath = sourcePath;
        return this;
    }
}