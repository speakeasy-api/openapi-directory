package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetDeploymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deployment_id")
    public Long deploymentId;
    public ReposGetDeploymentPathParams withDeploymentId(Long deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposGetDeploymentPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposGetDeploymentPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}