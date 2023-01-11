package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GitSubmodulesConfig
 *  Information about the Git submodules configuration for an CodeBuild build project. 
**/
public class GitSubmodulesConfig {
    @JsonProperty("fetchSubmodules")
    public Boolean fetchSubmodules;
    public GitSubmodulesConfig withFetchSubmodules(Boolean fetchSubmodules) {
        this.fetchSubmodules = fetchSubmodules;
        return this;
    }
}