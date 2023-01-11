package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentWorkers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListDeployments200ApplicationJsonAnAppDeploymentWorkers withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_commit_hash")
    public String sourceCommitHash;
    public ListDeployments200ApplicationJsonAnAppDeploymentWorkers withSourceCommitHash(String sourceCommitHash) {
        this.sourceCommitHash = sourceCommitHash;
        return this;
    }
}