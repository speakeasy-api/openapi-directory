package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetDeploymentStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deployment_id")
    public Long deploymentId;
    public ReposGetDeploymentStatusPathParams withDeploymentId(Long deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposGetDeploymentStatusPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposGetDeploymentStatusPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=status_id")
    public Long statusId;
    public ReposGetDeploymentStatusPathParams withStatusId(Long statusId) {
        this.statusId = statusId;
        return this;
    }
}