package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branch")
    public String branch;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploy_on_push")
    public Boolean deployOnPush;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub withDeployOnPush(Boolean deployOnPush) {
        this.deployOnPush = deployOnPush;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repo")
    public String repo;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}