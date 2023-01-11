package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsRemoveSelectedRepoFromOrgSecretPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsRemoveSelectedRepoFromOrgSecretPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_id")
    public Long repositoryId;
    public ActionsRemoveSelectedRepoFromOrgSecretPathParams withRepositoryId(Long repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=secret_name")
    public String secretName;
    public ActionsRemoveSelectedRepoFromOrgSecretPathParams withSecretName(String secretName) {
        this.secretName = secretName;
        return this;
    }
}