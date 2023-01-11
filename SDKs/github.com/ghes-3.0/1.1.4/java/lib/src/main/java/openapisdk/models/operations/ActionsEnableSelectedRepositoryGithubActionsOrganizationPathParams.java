package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsEnableSelectedRepositoryGithubActionsOrganizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsEnableSelectedRepositoryGithubActionsOrganizationPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_id")
    public Long repositoryId;
    public ActionsEnableSelectedRepositoryGithubActionsOrganizationPathParams withRepositoryId(Long repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
}