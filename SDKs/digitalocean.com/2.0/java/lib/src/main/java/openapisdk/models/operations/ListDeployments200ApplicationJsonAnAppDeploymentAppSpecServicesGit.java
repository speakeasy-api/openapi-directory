package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branch")
    public String branch;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repo_clone_url")
    public String repoCloneUrl;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit withRepoCloneUrl(String repoCloneUrl) {
        this.repoCloneUrl = repoCloneUrl;
        return this;
    }
}