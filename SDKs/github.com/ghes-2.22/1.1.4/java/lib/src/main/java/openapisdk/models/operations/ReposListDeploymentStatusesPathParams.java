package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListDeploymentStatusesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deployment_id")
    public Long deploymentId;
    public ReposListDeploymentStatusesPathParams withDeploymentId(Long deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposListDeploymentStatusesPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposListDeploymentStatusesPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}