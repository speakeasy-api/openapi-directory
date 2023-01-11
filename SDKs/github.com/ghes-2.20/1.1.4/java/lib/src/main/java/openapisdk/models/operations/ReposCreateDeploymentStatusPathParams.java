package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateDeploymentStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deployment_id")
    public Long deploymentId;
    public ReposCreateDeploymentStatusPathParams withDeploymentId(Long deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposCreateDeploymentStatusPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposCreateDeploymentStatusPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}