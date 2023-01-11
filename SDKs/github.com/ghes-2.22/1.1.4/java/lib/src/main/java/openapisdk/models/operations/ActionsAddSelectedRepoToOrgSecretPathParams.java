package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsAddSelectedRepoToOrgSecretPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsAddSelectedRepoToOrgSecretPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_id")
    public Long repositoryId;
    public ActionsAddSelectedRepoToOrgSecretPathParams withRepositoryId(Long repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=secret_name")
    public String secretName;
    public ActionsAddSelectedRepoToOrgSecretPathParams withSecretName(String secretName) {
        this.secretName = secretName;
        return this;
    }
}